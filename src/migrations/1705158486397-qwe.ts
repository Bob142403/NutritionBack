import { MigrationInterface, QueryRunner } from "typeorm";

export class Qwe1705158486397 implements MigrationInterface {
    name = 'Qwe1705158486397'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" RENAME COLUMN "username" TO "qwe"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" RENAME COLUMN "qwe" TO "username"`);
    }

}
