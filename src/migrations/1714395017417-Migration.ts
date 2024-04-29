import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1714395017417 implements MigrationInterface {
    name = 'Migration1714395017417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "label::English"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "label::Tajik"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "label::Uzbek"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "Food"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "Products" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "Name_of_10_group_tj" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "Products_tj" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "Name_of_10_group_uz" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "Products_uz" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "Products_uz"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "Name_of_10_group_uz"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "Products_tj"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "Name_of_10_group_tj"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "Products"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "Food" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "label::Uzbek" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "label::Tajik" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "label::English" character varying NOT NULL`);
    }

}
