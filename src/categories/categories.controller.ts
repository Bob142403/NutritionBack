import { Request, Response } from "express";
import { pool } from "../../database/pool";

class BreakFast {
  async getCategories(req: Request, res: Response) {
    try {
      const comments = await pool.query(`SELECT * FROM categories`);

      res.status(200).json({ categories: comments.rows });
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
}

export default BreakFast;
