import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AddressEntity } from "./entities/address.entity";
import { Repository } from "typeorm";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private addressRepo: Repository<AddressEntity>,
    private readonly userService: UserService,
  ){}

  async create_address(createAddress: CreateAddressDto, user_id:string):Promise<AddressEntity>{
    await this.userService.existUser(user_id)
    return this.addressRepo.create({...createAddress,user_id})
  }
}