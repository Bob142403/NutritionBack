import express from "express";
import cors from "cors";
import { pool } from "./database/pool";
import auth from "./src/auth/auth.route";
import category from "./src/category/category.route";
import feedback from "./src/feedback/feedback.route";
import comment from "./src/comment/comment.route";
import { config } from "dotenv";
import { CronJob } from "cron";

// const cronJob = new CronJob("*/2 * * * *", async () => {
//   // console.log("____________________/");
//   console.log("CronJob Start ", new Date().toTimeString());
//   try {
//     // const client = await pool.connect();
//     await pool.query(`SELECT * FROM users`);
//     // console.log("CRONJOB WORKING");
//     // await pool.end();
//   } catch (e) {
//     console.error(e);
//   }
//   console.log("CronJob Finish! ", new Date().toTimeString());
// });

// // Start job
// if (!cronJob.running) {
//   cronJob.start();
// }

// setInterval(async () => {
//   try {
//     const qwe = await fetch("https://dait-f.onrender.com/comment/getAll", {
//       method: "GET",
//       headers: {
//         Authorization: "",
//         "Content-type": "application/json",
//       },
//     });
//     const res = await qwe.json();
//     console.log("res: ", res);
//   } catch (err) {
//     console.error(err);
//   }
//   console.log(new Date().toTimeString());
// }, 60000);

config();

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", async (req, res, next) => {
  const response = await pool.query("SELECT version()");
  console.log(response.rows[0]);

  res.status(200).json({
    message: "Running Node with Express and Typescript",
  });
});

app.use(auth);
app.use("/category", category);
app.use("/feedback", feedback);
app.use("/comment", comment);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}.`);
});
