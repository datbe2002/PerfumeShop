import { IsString, IsEmail, IsOptional, IsUUID, IsEnum, IsArray, IsDate } from "class-validator";
import { Role } from "@prisma/client";

export class CreateUserDto {
  @IsUUID()
  id: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

//   @IsEnum(Role)
//   role: Role;

//   @IsOptional()
//   @IsString()
//   name?: string;

//   @IsOptional()
//   @IsString()
//   phoneNumber?: string;

//   @IsOptional()
//   @IsString()
//   address?: string;

//   @IsOptional()
//   @IsDate()
//   createdAt?: Date;

//   @IsOptional()
//   @IsDate()
//   updatedAt?: Date;

//   @IsOptional()
//   @IsArray()
//   orders?: any[];

//   @IsOptional()
//   @IsArray()
//   reviews?: any[];
}