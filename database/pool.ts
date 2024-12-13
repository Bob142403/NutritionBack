import { Pool } from "pg";
import { config } from "dotenv";

config();

export const pool = new Pool({
  user: "usr_nutrition",
  password: "w3hsdAPxU7MSKzsHVSdSPKJpTN0HD5C0",
  port: 5432,
  database: "db_nutrition_8kef",
  host: "dpg-ctdt3ilumphs7398aia0-a.frankfurt-postgres.render.com",
  ssl: true,
});
