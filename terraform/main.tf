provider "aws" {
  region = var.aws_region
}

# =====================================
# 1️⃣ Amazon ECR Repository (Check before creating)
# =====================================
data "aws_ecr_repository" "existing_ecr" {
  name = "dcw-web-repo"
}

resource "aws_ecr_repository" "nextjs_ecr" {
  count = length(data.aws_ecr_repository.existing_ecr.id) > 0 ? 0 : 1  # ✅ If exists, don't create
  name  = "dcw-web-repo"
  force_delete = true
}

# =====================================
# 2️⃣ IAM Role for ECS Task Execution
# =====================================
data "aws_iam_role" "existing_role" {
  name = "ecsTaskExecutionRole"
}

resource "aws_iam_role" "ecsTaskExecutionRole" {
  count = length(data.aws_iam_role.existing_role.name) > 0 ? 0 : 1  # ✅ If exists, don't create
  name  = "ecsTaskExecutionRole"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = { Service = "ecs-tasks.amazonaws.com" }
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "ecsTaskExecutionRole_policy" {
  count      = length(data.aws_iam_role.existing_role.name) > 0 ? 0 : 1
  role       = length(data.aws_iam_role.existing_role.name) > 0 ? data.aws_iam_role.existing_role.name : aws_iam_role.ecsTaskExecutionRole[0].name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# =====================================
# 3️⃣ Create ECS Cluster
# =====================================
resource "aws_ecs_cluster" "nextjs_cluster" {
  name = "nextjs-cluster"
}

# =====================================
# 4️⃣ Create ECS Task Definition (Fix image URI)
# =====================================
resource "aws_ecs_task_definition" "nextjs_task" {
  family                   = "nextjs-task"
  execution_role_arn       = length(data.aws_iam_role.existing_role.name) > 0 ? data.aws_iam_role.existing_role.arn : aws_iam_role.ecsTaskExecutionRole[0].arn
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  network_mode             = "awsvpc"

  container_definitions = jsonencode([
    {
      name      = "nextjs-app"
      image     = "${data.aws_ecr_repository.existing_ecr.repository_url}:latest"  # ✅ Use full ECR URL dynamically
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

# =====================================
# 5️⃣ Create ECS Service (Fix idempotency issues)
# =====================================
resource "aws_ecs_service" "nextjs_service" {
  name            = "nextjs-service"
  cluster         = aws_ecs_cluster.nextjs_cluster.id
  task_definition = "${aws_ecs_task_definition.nextjs_task.family}:${aws_ecs_task_definition.nextjs_task.revision}" # ✅ Ensure latest task revision
  desired_count   = 1
  launch_type     = "FARGATE"

  force_new_deployment = true  # ✅ Ensures ECS does not recreate the service, just updates it

  network_configuration {
    subnets         = var.subnets
    security_groups = var.security_groups
    assign_public_ip = true
  }

  lifecycle {
    ignore_changes = [desired_count]  # ✅ Prevent Terraform from replacing the service due to count changes
  }
}
