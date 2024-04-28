import { MigrationInterface, QueryRunner } from "typeorm";

export class Qwer1705158529620 implements MigrationInterface {
    name = 'Qwer1705158529620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "qwe"`);
        await queryRunner.query(`ALTER TABLE "test" ADD "qwe" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "qwe"`);
        await queryRunner.query(`ALTER TABLE "test" ADD "qwe" character varying NOT NULL`);
    }

}
