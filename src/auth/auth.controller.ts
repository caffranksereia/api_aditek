import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { UserService } from "src/user/user.service";
import { CreateAuthRDto } from "./dto/auth-register.dto";

@Controller('auth')
export class AuthController{
  constructor(private readonly authService: AuthService, private readonly userService:UserService){}


  @Post('login')
  async authenticated(@Body() authDto: AuthDto){
    return this.authService.auth(authDto);
  }

  @Post('register_user')
  async register_user (@Body() data: CreateAuthRDto){
    return this.userService.create_user(data)
  }
}