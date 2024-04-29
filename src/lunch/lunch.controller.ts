import { Request, Response } from "express";
import { pool } from "../../database/pool";

class Lunch {
  async getGroups(req: Request, res: Response) {
    try {
      const comments = await pool.query(`SELECT * FROM lunchgroup`);

      res.status(200).json({ lunchgroup: comments.rows });
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
  async getFoods(req: Request, res: Response) {
    try {
      const comments = await pool.query(`SELECT * FROM lunchfood`);

      res.status(200).json({ lunchfood: comments.rows });
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
  async getProducts(req: Request, res: Response) {
    try {
      const comments = await pool.query(`SELECT * FROM lunchproduct`);

      res.status(200).json({ lunchproduct: comments.rows });
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
}

export default Lunch;
