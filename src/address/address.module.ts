import { Module } from "@nestjs/common";
import { AddressController } from "./address.controller";
import { AddressService } from "./address.service";
import { UserModule } from "src/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AddressEntity } from "./entities/address.entity";

@Module({
  imports:[UserModule, TypeOrmModule.forFeature([AddressEntity])],
  controllers:[AddressController],
  providers:[AddressService]
})
export class AddressModule{}