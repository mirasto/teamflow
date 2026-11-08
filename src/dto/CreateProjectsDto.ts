import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateProjectsDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;
}
