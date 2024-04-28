import { Pool } from "pg";
import { config } from "dotenv";

config();

export const pool = new Pool({
  user: "db_nutrition_5wf9_user",
  password: "KbbbE4Dlq7pa5bT3RJQRpxrDJ8ejyklo",
  port: 5432,
  database: "db_nutrition_5wf9",
  host: "dpg-con2a9kf7o1s73fc9f9g-a.frankfurt-postgres.render.com",
  ssl: true,
});
