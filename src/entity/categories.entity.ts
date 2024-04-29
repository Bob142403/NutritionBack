import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
class Categories {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  id_group!: string;

  @Column()
  Name_of_group!: string;

  @Column()
  Products!: string;

  @Column()
  Name_of_10_group_tj!: string;

  @Column()
  Products_tj!: string;

  @Column()
  Name_of_10_group_uz!: string;

  @Column()
  Products_uz!: string;
}

export default Categories;
