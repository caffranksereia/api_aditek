import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./user.dto";

export class UpdateUsersPatchDto extends PartialType(CreateUserDto){}