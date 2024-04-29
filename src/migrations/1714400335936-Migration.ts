import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1714400335936 implements MigrationInterface {
    name = 'Migration1714400335936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "disctrict" character varying NOT NULL, "email" character varying NOT NULL, "fio" character varying NOT NULL, "gender" character varying NOT NULL, "jamoat" character varying NOT NULL, "password" character varying NOT NULL, "telephone" character varying NOT NULL, "village" character varying NOT NULL, "birthday" integer NOT NULL, "fromWho" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "createat" character varying NOT NULL, "fio" character varying NOT NULL, "message" character varying NOT NULL, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "group1" character varying NOT NULL, "group2" character varying NOT NULL, "group3" character varying NOT NULL, "group4" character varying NOT NULL, "group5" character varying NOT NULL, "group6" character varying NOT NULL, "group7" character varying NOT NULL, "group8" character varying NOT NULL, "group9" character varying NOT NULL, "group10" character varying NOT NULL, "group11" character varying NOT NULL, "group12" character varying NOT NULL, "group13" character varying NOT NULL, "userId" character varying NOT NULL, "date" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
