import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("dinnerproduct")
class DinnerProduct {
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
  DinnerFood!: string;
}

export default DinnerProduct;
