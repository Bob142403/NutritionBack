import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("dinnergroup")
class DinnerGroup {
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

  @Column()
  "label::Uzbek"!: string;
}

export default DinnerGroup;
