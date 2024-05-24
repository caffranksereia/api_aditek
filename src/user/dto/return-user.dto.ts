import { AddressEntity } from "src/address/entities/address.entity";
import { UserEntity } from "../entity/user.entities";
import { CreateAddressDto } from "src/address/dto/create-address.dto";

export class ReturnUserDto {
  id:string;
  name:string;
  cpf:string;
  rg:string;
  birth_date:string;
  age:string;
  email:string;
  cell_phone:string;
  address?:CreateAddressDto
  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.age = userEntity.age;
    this.email = userEntity.email;
    this.cell_phone = userEntity.cell_phone;
    this.cpf = userEntity.cpf;
    this.rg = userEntity.rg;
    this.birth_date = userEntity.birth_date;
    this.address = userEntity.addresses
  }
}