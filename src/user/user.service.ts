import {  BadGatewayException, BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";
import { Repository } from "typeorm";
import { UserEntity } from "./entity/user.entities";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateUsersPatchDto } from "./dto/update-user-path.dto";
import { UpdateUserPutDto } from "./dto/update-user-put.dto";
import * as bcrt from "bcrypt"
@Injectable()
export class UserService{

  constructor(
    @InjectRepository(UserEntity)
    private usersRepo: Repository<UserEntity>,
  ){}



  async create_user(data:CreateUserDto ):Promise<UserEntity>{

      data.password = await this.convertPassBcrypt(data.password
      );
      await this.existUser(data.email);
      const user = await this.usersRepo.create(data)
      return this.usersRepo.save(user)

  }


  async getAllUsers():Promise<UserEntity[]>{
    return this.usersRepo.find();
  }

  async getUser( id:string) :Promise<UserEntity>{
    return this.usersRepo.findOneBy({
        id
    })
  }

  async edit_user(id:string,update_users:UpdateUserPutDto) :Promise<UserEntity>{
    await this.getUser(id);

    this.usersRepo.update(id,
      update_users )

      return this.getUser(id);
  }

  async edit_one_camp_user(id:string,update_users:UpdateUsersPatchDto):Promise<UserEntity> {
    await this.getUser(id)
    await this.usersRepo.update(id, update_users)
    return this.getUser(id);
  }

  async delete_user(id:string){
    await this.getUser(id)
    return this.usersRepo.delete(id)
  }


  async convertPassBcrypt(pass:string){
    const saltOrRounds = 10;

    return await bcrt.hash(pass, saltOrRounds)

  }

  async existUser(email:string){
    const res = this.usersRepo.exists({where:{email}})
    if(!res){
      throw new BadGatewayException('Email exist')
    }
  }
}