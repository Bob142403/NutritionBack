import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category")
class Category {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  group1!: string;

  @Column()
  group2!: string;

  @Column()
  group3!: string;

  @Column()
  group4!: string;

  @Column()
  group5!: string;

  @Column()
  group6!: string;

  @Column()
  group7!: string;

  @Column()
  group8!: string;

  @Column()
  group9!: string;

  @Column()
  group10!: string;

  @Column()
  group11!: string;

  @Column()
  group12!: string;

  @Column()
  group13!: string;

  @Column()
  userId!: string;

  @Column()
  date!: string;
}

export default Category;
