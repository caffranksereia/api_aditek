import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";
import {  UpdateUserPutDto } from "./dto/update-user-put.dto";
import { UpdateUsersPatchDto } from "./dto/update-user-path.dto";
import { ReturnUserDto } from "./dto/return-user.dto";

@Controller("user")
export class UserController{
  constructor(private readonly userService: UserService){}

  @Post()
  async create_user(@Body() data: CreateUserDto){
    return this.userService.create_user(data)
  }

  @Get()
  async getAllUsers():Promise<ReturnUserDto[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id:string):Promise<ReturnUserDto> {
    return this.userService.getUser(id)
  }

  @Put(':id')
  async edit_user(@Param('id')id:string,@Body() update_users:UpdateUserPutDto):Promise<ReturnUserDto> {
    return this.userService.edit_user(id, update_users)
  }

  @Patch(':id')
  async edit_one_camp_user(@Param('id')id:string,@Body() update_users:UpdateUsersPatchDto):Promise<ReturnUserDto> {
    return this.userService.edit_one_camp_user(id, update_users)
  }

  @Delete(':id')
  async delete_user(@Param('id')id:string){
    return this.userService.delete_user(id)
  }
}