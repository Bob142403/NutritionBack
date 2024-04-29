import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("dinnerfood")
class DinnerFood {
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

  @Column()
  DinnerGroup!: string;
}

export default DinnerFood;
