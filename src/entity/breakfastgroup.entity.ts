import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("breakfastgroup")
class BreakfastGroup {
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

export default BreakfastGroup;
