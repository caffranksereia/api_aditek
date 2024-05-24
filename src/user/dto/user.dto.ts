import { IsString } from "class-validator";

export class CreateUserDto{
  @IsString()
  name:string;
  @IsString()
  cpf:string;
  @IsString()
  rg:string;
  @IsString()
  birth_date:string;
  @IsString()
  age:string;
  @IsString()
  email:string;
  @IsString()
  cell_phone:string;
  @IsString()
  password:string;
  @IsString()
  createdAt:string;

  @IsString()
  updateAt:string;
}