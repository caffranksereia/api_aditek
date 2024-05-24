import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entity/user.entities';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AddressEntity } from './address/entities/address.entity';

@Module({
  imports: [AuthModule, UserModule,ConfigModule.forRoot(),TypeOrmModule.forRoot({
    type:  "postgres",
    host:"localhost",
    port: Number(process.env.PORT),
    username:"postgres",
    password:"Mari0001",
    database:"postgres",
    entities:[UserEntity,AddressEntity],
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
