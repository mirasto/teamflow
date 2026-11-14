import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateProjectDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: 'should be bigger then 2 symbols' })
  @IsOptional()
  description?: string;
}
