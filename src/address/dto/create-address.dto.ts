import { IsString } from "class-validator";

export class CreateAddressDto {
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
}