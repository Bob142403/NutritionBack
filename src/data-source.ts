import { DataSource } from "typeorm";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "dpg-ctdt3ilumphs7398aia0-a.frankfurt-postgres.render.com",
  port: 5432,
  username: "usr_nutrition",
  password: "w3hsdAPxU7MSKzsHVSdSPKJpTN0HD5C0",
  database: "db_nutrition_8kef",
  entities: ["src/**/*.entity{.ts,.js}"],
  ssl: true,
  migrations: ["src/migrations/*{.ts,.js}"],
});

PostgresDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
