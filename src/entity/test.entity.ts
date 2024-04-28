import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("test")
class Tests {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  qwe!: string;

  @Column()
  email!: string;

  @Column()
  district!: string;

  @Column()
  village!: string;

  @Column()
  jamoat!: string;

  @Column()
  gender!: string;

  @Column()
  fio!: string;

  @Column()
  password!: string;

  @Column()
  birthday!: string;

  @Column()
  telephone!: string;

  @Column()
  fromWho!: string;

  @Column()
  qweqweqw!: string;
}

export default Tests;
