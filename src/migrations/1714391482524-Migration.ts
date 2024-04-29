import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1714391482524 implements MigrationInterface {
    name = 'Migration1714391482524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lunchgroup" RENAME COLUMN "label::English!" TO "label::English"`);
        await queryRunner.query(`ALTER TABLE "lunchproduct" RENAME COLUMN "label::English!" TO "label::English"`);
        await queryRunner.query(`ALTER TABLE "lunchfood" RENAME COLUMN "label::English!" TO "label::English"`);
        await queryRunner.query(`ALTER TABLE "district" RENAME COLUMN "label::English!" TO "label::English"`);
        await queryRunner.query(`ALTER TABLE "dinnerproduct" RENAME COLUMN "label::English!" TO "label::English"`);
        await queryRunner.query(`ALTER TABLE "dinnerfood" RENAME COLUMN "label::English!" TO "label::English"`);
        await queryRunner.query(`ALTER TABLE "dinnergroup" RENAME COLUMN "label::English!" TO "label::English"`);
        await queryRunner.query(`ALTER TABLE "categories" RENAME COLUMN "label::English!" TO "label::English"`);
        await queryRunner.query(`ALTER TABLE "breakfastproduct" RENAME COLUMN "label::English!" TO "label::English"`);
        await queryRunner.query(`ALTER TABLE "breakfastgroup" RENAME COLUMN "label::English!" TO "label::English"`);
        await queryRunner.query(`ALTER TABLE "breakfastfood" RENAME COLUMN "label::English!" TO "label::English"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "breakfastfood" RENAME COLUMN "label::English" TO "label::English!"`);
        await queryRunner.query(`ALTER TABLE "breakfastgroup" RENAME COLUMN "label::English" TO "label::English!"`);
        await queryRunner.query(`ALTER TABLE "breakfastproduct" RENAME COLUMN "label::English" TO "label::English!"`);
        await queryRunner.query(`ALTER TABLE "categories" RENAME COLUMN "label::English" TO "label::English!"`);
        await queryRunner.query(`ALTER TABLE "dinnergroup" RENAME COLUMN "label::English" TO "label::English!"`);
        await queryRunner.query(`ALTER TABLE "dinnerfood" RENAME COLUMN "label::English" TO "label::English!"`);
        await queryRunner.query(`ALTER TABLE "dinnerproduct" RENAME COLUMN "label::English" TO "label::English!"`);
        await queryRunner.query(`ALTER TABLE "district" RENAME COLUMN "label::English" TO "label::English!"`);
        await queryRunner.query(`ALTER TABLE "lunchfood" RENAME COLUMN "label::English" TO "label::English!"`);
        await queryRunner.query(`ALTER TABLE "lunchproduct" RENAME COLUMN "label::English" TO "label::English!"`);
        await queryRunner.query(`ALTER TABLE "lunchgroup" RENAME COLUMN "label::English" TO "label::English!"`);
    }

}
