import { UserEntity } from "src/user/entity/user.entities";

export class LoginPayload {
  id: string;
 name:string;
 email:string

  constructor(user: UserEntity) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email
  }
}