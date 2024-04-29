import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lunchproduct")
class LunchProduct {
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
  LunchFood!: string;
}

export default LunchProduct;
