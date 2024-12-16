import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class Users {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  username!: string;

  @Column()
  district!: string;

  @Column()
  email!: string;

  @Column()
  fio!: string;

  @Column()
  gender!: string;

  @Column()
  jamoat!: string;

  @Column()
  password!: string;

  @Column()
  telephone!: string;

  @Column()
  village!: string;

  @Column()
  birthday!: number;

  @Column()
  fromWho!: string;
}

export default Users;
