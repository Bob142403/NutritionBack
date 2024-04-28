import { DataSource } from "typeorm";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "dpg-con2a9kf7o1s73fc9f9g-a.frankfurt-postgres.render.com",
  port: 5432,
  username: "db_nutrition_5wf9_user",
  password: "KbbbE4Dlq7pa5bT3RJQRpxrDJ8ejyklo",
  database: "db_nutrition_5wf9",
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
