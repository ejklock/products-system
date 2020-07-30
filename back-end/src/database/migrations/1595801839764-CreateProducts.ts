import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateProducts1595801839764 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "title",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "type",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "description",
            type: "text",
            isNullable: false,
          },
          {
            name: "filename",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "height",
            type: "int",
            isNullable: false,
          },
          {
            name: "width",
            type: "int",
            isNullable: false,
          },
          {
            name: "price",
            type: "double",
            isNullable: false,
          },
          {
            name: "rating",
            type: "int",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
