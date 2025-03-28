import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  email: string | undefined;

  @IsOptional()
  password: string | undefined;
}
