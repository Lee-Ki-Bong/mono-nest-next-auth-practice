import { Controller, Post } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { UserService } from "src/user/user.service"

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @Post("singup")
  async registerUser() {
    await this.userService.create()
  }
}
