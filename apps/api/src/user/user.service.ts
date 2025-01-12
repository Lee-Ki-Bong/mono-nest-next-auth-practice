import { ConflictException, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { User } from "./entity/user.entity"
import { CreateUserDto } from "./dto/create-user.dto"

@Injectable()
export class UserService {
  constructor(private readonly userRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {}
}
