import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/user/entity/user.entities";

@Module({
  imports:[JwtModule.register({
    secret: '12345',
    signOptions:{expiresIn: '1d'}
  }), UserModule, TypeOrmModule.forFeature([UserEntity])],
  controllers:[AuthController],
  providers:[AuthService]
})

export class AuthModule {}