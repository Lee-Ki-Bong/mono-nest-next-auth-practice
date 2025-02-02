import { IsEmail, IsString } from "class-validator"

export class SingupDto {
  @IsString()
  name: string

  @IsString()
  @IsEmail()
  email: string

  @IsString()
  password: string
}
