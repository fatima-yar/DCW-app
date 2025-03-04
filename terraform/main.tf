provider "aws" {
  region = var.aws_region
}

# detect whether ecr exist, otherwise to create ECR

data "aws_ecr_repository" "existing_ecr" {
  name = "dcw-web-repo"
}
resource "aws_ecr_repository" "nextjs_ecr" {
  name = "dcw-web-repo"
  force_delete = true 
}


# create ECS task execution role
data "aws_iam_role" "existing_role" {
  name = "ecsTaskExecutionRole"
}
resource "aws_iam_role" "ecsTaskExecutionRole" {
  count = length(data.aws_iam_role.existing_role.name) > 0 ? 0 : 1  # if exist, then don't create
  name = "ecsTaskExecutionRole"

  assume_role_policy = jsonencode({
    Statement = [{
      Effect = "Allow"
      Principal = { Service = "ecs-tasks.amazonaws.com" }
      Action = "sts:AssumeRole"
    }]
  })
}

# create ECS task execution policy
resource "aws_iam_role_policy_attachment" "ecsTaskExecutionRole_policy" {
  count      = length(data.aws_iam_role.existing_role.name) > 0 ? 0 : 1  # if exist, then don't create
  role       = aws_iam_role.ecsTaskExecutionRole.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# create ECS cluster
resource "aws_ecs_cluster" "nextjs_cluster" {
  name = "nextjs-cluster"
}

# create ECS task definition
resource "aws_ecs_task_definition" "nextjs_task" {
  family                   = "nextjs-task"
  execution_role_arn       = "arn:aws:iam::123456789012:role/ecsTaskExecutionRole"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"

  container_definitions = jsonencode([
    {
      name      = "nextjs-app"
      image     = "${aws_ecr_repository.nextjs_ecr.repository_url}:latest"
      cpu       = 256
      memory    = 512
      essential = true
      portMappings = [{
        containerPort = 3000
        hostPort      = 3000
      }]
    }
  ])
}

# create ECS service
resource "aws_ecs_service" "nextjs_service" {
  name            = "nextjs-service"
  cluster         = aws_ecs_cluster.nextjs_cluster.id
  task_definition = aws_ecs_task_definition.nextjs_task.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets         = var.subnets
    security_groups = var.security_groups
    assign_public_ip = true
  }
}