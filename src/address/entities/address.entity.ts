import { UserEntity } from "src/user/entity/user.entities";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"address"})
export class AddressEntity {
  @PrimaryGeneratedColumn("uuid")
  id:string;

  @Column({name:"user_id", nullable:false})
  user_id:string;
  @Column()
  street:string;
  
  @Column()
  complement:string;

  @Column()
  number_home:string;

  @Column()
  city:string;

  @Column()
  state:string

  @Column()
  cep:string;

  @OneToOne( ()=>UserEntity, (user) =>user.addresses)
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  user:UserEntity

}