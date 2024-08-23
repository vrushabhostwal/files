provider "aws" {
  region = "us-east-2"
  #   access_key = ""
  #   secret_key = ""	
}

resource "aws_instance" "intro" {
  ami                    = "ami-0892a9c01908fafd1"
  instance_type          = "t2.micro"
  availability_zone      = "ap-southeast-2"
  key_name               = "Jenkins-SG"
  vpc_security_group_ids = ["sg-0d5ad1f5551eecff2"]
  tags = {
    Name    = "Dove-Instance"
    Project = "Dove"
  }
}
