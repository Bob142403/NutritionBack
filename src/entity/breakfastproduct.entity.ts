import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("breakfastproduct")
class BreakfastProduct {
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
  Food!: string;
}

export default BreakfastProduct;
