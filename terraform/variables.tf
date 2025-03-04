variable "aws_region" {
  default = "ap-southeast-2"
}


variable "subnets" {
  description = "List of subnets for ECS Fargate"
  type        = list(string)
}

variable "security_groups" {
  description = "List of security groups for ECS"
  type        = list(string)
}
