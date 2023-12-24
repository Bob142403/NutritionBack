import { Request, Response } from "express";
import { pool } from "../../database/pool";

class Feedback {
  async insert(req: Request, res: Response) {
    const { username, fio, createat, message } = req.body;

    try {
      await pool.query(
        `INSERT INTO comments (username, createat, fio, message) 
      VALUES ($1, $2, $3, $4)`,
        [username, createat, fio, message]
      );

      res.status(200).json("Comment Created");
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
  async getComments(req: Request, res: Response) {
    try {
      const comments = await pool.query(`SELECT * FROM comments`);

      res.status(200).json({ comments: comments.rows });
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
}

export default Feedback;
