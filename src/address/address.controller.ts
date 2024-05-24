import { Body, Controller, Post } from "@nestjs/common";
import { AddressService } from "./address.service";
import { CreateAddressDto } from "./dto/create-address.dto";

@Controller('address')
export class AddressController{
  constructor(private readonly addressService:AddressService){}

  @Post()
  async create_address(@Body() createAddress: CreateAddressDto, user_id:string){
    return this.addressService.create_address(createAddress,user_id)
  }
}