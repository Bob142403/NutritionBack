import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostTable1705157153407 implements MigrationInterface {
    name = 'UpdatePostTable1705157153407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "district" character varying NOT NULL, "village" character varying NOT NULL, "jamoat" character varying NOT NULL, "gender" character varying NOT NULL, "fio" character varying NOT NULL, "password" character varying NOT NULL, "birthday" character varying NOT NULL, "telephone" character varying NOT NULL, "fromWho" character varying NOT NULL, CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "test"`);
    }

}
