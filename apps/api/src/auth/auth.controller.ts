import { Body, Controller, Post } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { UserService } from "src/user/user.service"
import { SingupDto } from "./dto/singup.dto"

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @Post("signup")
  async registerUser(@Body() singupDto: SingupDto) {
    return await this.userService.create(singupDto)
  }
}
