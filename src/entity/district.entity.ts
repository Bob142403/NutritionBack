import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("district")
class District {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  list_name!: string;

  @Column()
  name!: string;

  @Column()
  "label::English"!: string;

  @Column()
  "label::Tajik"!: string;
}

export default District;
