import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1734372795125 implements MigrationInterface {
    name = 'Migration1734372795125'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "district" character varying NOT NULL, "email" character varying NOT NULL, "fio" character varying NOT NULL, "gender" character varying NOT NULL, "jamoat" character varying NOT NULL, "password" character varying NOT NULL, "telephone" character varying NOT NULL, "village" character varying NOT NULL, "birthday" integer NOT NULL, "fromWho" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lunchproduct" ("id" SERIAL NOT NULL, "list_name" character varying NOT NULL, "name" character varying NOT NULL, "label::English" character varying NOT NULL, "label::Tajik" character varying NOT NULL, "label::Uzbek" character varying NOT NULL, "LunchFood" character varying NOT NULL, CONSTRAINT "PK_9e3d47032017ebc703e986ddb77" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lunchfood" ("id" SERIAL NOT NULL, "list_name" character varying NOT NULL, "name" character varying NOT NULL, "label::English" character varying NOT NULL, "label::Tajik" character varying NOT NULL, "label::Uzbek" character varying NOT NULL, "LunchGroup" character varying NOT NULL, CONSTRAINT "PK_5e06fa50cd14519a06a14493e66" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lunchgroup" ("id" SERIAL NOT NULL, "list_name" character varying NOT NULL, "name" character varying NOT NULL, "label::English" character varying NOT NULL, "label::Tajik" character varying NOT NULL, "label::Uzbek" character varying NOT NULL, CONSTRAINT "PK_e4f88d41708bd27677b06766af8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "district" ("id" SERIAL NOT NULL, "list_name" character varying NOT NULL, "name" character varying NOT NULL, "label::English" character varying NOT NULL, "label::Tajik" character varying NOT NULL, CONSTRAINT "PK_ee5cb6fd5223164bb87ea693f1e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dinnergroup" ("id" SERIAL NOT NULL, "list_name" character varying NOT NULL, "name" character varying NOT NULL, "label::English" character varying NOT NULL, "label::Tajik" character varying NOT NULL, "label::Uzbek" character varying NOT NULL, CONSTRAINT "PK_471e22799e9c6e0c489e04cfba2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dinnerfood" ("id" SERIAL NOT NULL, "list_name" character varying NOT NULL, "name" character varying NOT NULL, "label::English" character varying NOT NULL, "label::Tajik" character varying NOT NULL, "label::Uzbek" character varying NOT NULL, "DinnerGroup" character varying NOT NULL, CONSTRAINT "PK_70c387fb607faf5a5237bc4c812" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dinnerproduct" ("id" SERIAL NOT NULL, "list_name" character varying NOT NULL, "name" character varying NOT NULL, "label::English" character varying NOT NULL, "label::Tajik" character varying NOT NULL, "label::Uzbek" character varying NOT NULL, "DinnerFood" character varying NOT NULL, CONSTRAINT "PK_cead02dcdb403392ae0749ff835" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "createat" character varying NOT NULL, "fio" character varying NOT NULL, "message" character varying NOT NULL, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "group1" character varying NOT NULL, "group2" character varying NOT NULL, "group3" character varying NOT NULL, "group4" character varying NOT NULL, "group5" character varying NOT NULL, "group6" character varying NOT NULL, "group7" character varying NOT NULL, "group8" character varying NOT NULL, "group9" character varying NOT NULL, "group10" character varying NOT NULL, "group11" character varying NOT NULL, "group12" character varying NOT NULL, "group13" character varying NOT NULL, "userId" character varying NOT NULL, "date" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "id_group" character varying NOT NULL, "Name_of_group" character varying NOT NULL, "Products" character varying NOT NULL, "Name_of_10_group_tj" character varying NOT NULL, "Products_tj" character varying NOT NULL, "Name_of_10_group_uz" character varying NOT NULL, "Products_uz" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "breakfastproduct" ("id" SERIAL NOT NULL, "list_name" character varying NOT NULL, "name" character varying NOT NULL, "label::English" character varying NOT NULL, "label::Tajik" character varying NOT NULL, "label::Uzbek" character varying NOT NULL, "Food" character varying NOT NULL, CONSTRAINT "PK_bc0f5b2b89f84f52b32f24e303e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "breakfastgroup" ("id" SERIAL NOT NULL, "list_name" character varying NOT NULL, "name" character varying NOT NULL, "label::English" character varying NOT NULL, "label::Tajik" character varying NOT NULL, "label::Uzbek" character varying NOT NULL, CONSTRAINT "PK_8e0dcb06bd72ec3252d89466da5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "breakfastfood" ("id" SERIAL NOT NULL, "list_name" character varying NOT NULL, "name" character varying NOT NULL, "label::English" character varying NOT NULL, "label::Tajik" character varying NOT NULL, "label::Uzbek" character varying NOT NULL, "BreakfastGroup" character varying NOT NULL, CONSTRAINT "PK_eb9a37cbdf47210502965f543f7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "breakfastfood"`);
        await queryRunner.query(`DROP TABLE "breakfastgroup"`);
        await queryRunner.query(`DROP TABLE "breakfastproduct"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "dinnerproduct"`);
        await queryRunner.query(`DROP TABLE "dinnerfood"`);
        await queryRunner.query(`DROP TABLE "dinnergroup"`);
        await queryRunner.query(`DROP TABLE "district"`);
        await queryRunner.query(`DROP TABLE "lunchgroup"`);
        await queryRunner.query(`DROP TABLE "lunchfood"`);
        await queryRunner.query(`DROP TABLE "lunchproduct"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
