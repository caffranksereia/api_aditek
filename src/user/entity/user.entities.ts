import { AddressEntity } from "src/address/entities/address.entity";
import { Column, CreateDateColumn, Entity,  OneToOne,  PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity({name:"user"})
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  
  id:string;
  @Column({nullable:false})
  name:string;
  @Column({nullable:false})
  cpf:string;
  @Column({nullable:false})
  rg:string;
  @Column({type: 'date',nullable:false})
  birth_date:string;
  @Column({nullable:false})
  age:string;
  @Column({nullable:false, unique:true
  })
  email:string;
  @Column({nullable:false})
  cell_phone:string;
  @Column({nullable:false})
  password:string;
  @CreateDateColumn()
  createdAt:string;
  @UpdateDateColumn()
  updateAt:string;

  @OneToOne(() => AddressEntity, (address) => address.user)
  addresses?: AddressEntity;

}