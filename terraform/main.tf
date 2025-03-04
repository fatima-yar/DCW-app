provider "aws" {
  region = var.aws_region
}

# create ECR
resource "aws_ecr_repository" "nextjs_ecr" {
  name = "dcw-web-repo"
}

# create ECS task execution role
resource "aws_iam_role" "ecsTaskExecutionRole" {
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
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  execution_role_arn       = aws_iam_role.ecsTaskExecutionRole.arn
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
  name            = "DCW-service"
  cluster         = aws_ecs_cluster.nextjs_cluster.id
  task_definition = aws_ecs_task_definition.nextjs_task.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets         = ["subnet-05108f306a429e1ee"]  # Subnet ID
    security_groups = ["sg-0610fd10b324c4dec"]     # New SG ID
    assign_public_ip = true
  }
}
