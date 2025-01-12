import { ConflictException, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { User } from "./entity/user.entity"
import { CreateUserDto } from "./dto/create-user.dto"
import * as bcrypt from "bcrypt"
import { plainToInstance } from "class-transformer"
import { InjectRepository } from "@nestjs/typeorm"

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    // Check if user already exists
    const existsUser = await this.userRepository.findOne({
      where: { email: createUserDto.email }
    })
    console.log(existsUser)
    if (existsUser) {
      throw new ConflictException("User already exists")
    }

    // Create user
    const { password } = createUserDto
    const newUser = this.userRepository.save(
      plainToInstance(User, {
        ...createUserDto,
        password: await bcrypt.hash(password, 10)
      })
    )
    return newUser
  }
}
