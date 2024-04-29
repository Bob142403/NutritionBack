import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("comments")
class Comments {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  username!: string;

  @Column()
  createat!: string;

  @Column()
  fio!: string;

  @Column()
  message!: string;
}

export default Comments;
