import { IsString } from "class-validator";
import { AddressEntity } from "../entities/address.entity";

export class CreateAddressDto {
  @IsString()
  id:string
  @IsString()
  street:string;
  @IsString()
  complement:string;
  @IsString()
  number_home:string;
  @IsString()
  city:string;
  @IsString()
  state:string
  @IsString()
  cep:string;

  constructor(addressEntity: AddressEntity) {
    this.id = addressEntity.id;
    this.street = addressEntity.street;
    this.complement = addressEntity.complement;
    this.number_home = addressEntity.number_home;
    this.city = addressEntity.city;
    this.state = addressEntity.state;
    this.cep = addressEntity.cep;
  }
}