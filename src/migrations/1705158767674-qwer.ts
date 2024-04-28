import { MigrationInterface, QueryRunner } from "typeorm";

export class Qwer1705158767674 implements MigrationInterface {
    name = 'Qwer1705158767674'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" ADD "qweqweqw" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "qweqweqw"`);
    }

}
