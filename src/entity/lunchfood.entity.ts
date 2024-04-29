import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lunchfood")
class LunchFood {
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
  LunchGroup!: string;
}

export default LunchFood;
