import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("breakfastfood")
class BreakFastFood {
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
  BreakfastGroup!: string;
}

export default BreakFastFood;
