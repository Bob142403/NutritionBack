import { Pool } from "pg";
import { config } from "dotenv";

config();

export const pool = new Pool({
  user: "nutrition_pupg_user",
  password: "XxlsE7vcaGL7zjALLeZn2Gwd0hfClvLy",
  port: 5432,
  database: "nutrition_pupg",
  host: "dpg-clvd256d3nmc738bkcc0-a.frankfurt-postgres.render.com",
  ssl: true,
});
