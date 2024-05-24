import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthDto } from "./dto/auth.dto";
import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { UserEntity } from "src/user/entity/user.entities";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from "bcrypt"
import { access } from "fs";
import { LoginPayload } from "./dto/login-payload.dto";
import { ReturnLogin } from "./dto/return-payload.dto";
import { ReturnUserDto } from "src/user/dto/return-user.dto";
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, 
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>){}

  async checkToken(token: string){}
  async auth({email, password}:AuthDto){
    const  user = await this.usersRepo.findOneBy({
      email
    })
  const comparehash = bcrypt.compare(user.password, password)

      
    if(!user || !comparehash) {
        throw new UnauthorizedException('Email or password incorrect')
      }
    return  {accessToken:this.jwtService.sign({
      ...new LoginPayload(user)}),
      user: new ReturnUserDto(user),}
  }
  

 
}