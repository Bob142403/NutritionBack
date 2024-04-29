import { Request, Response } from "express";
import { pool } from "../../database/pool";

class Dinner {
  async getGroups(req: Request, res: Response) {
    try {
      const comments = await pool.query(`SELECT * FROM dinnergroup`);

      res.status(200).json({ dinnergroup: comments.rows });
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
  async getFoods(req: Request, res: Response) {
    try {
      const comments = await pool.query(`SELECT * FROM dinnerfood`);

      res.status(200).json({ dinnerfood: comments.rows });
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
  async getProducts(req: Request, res: Response) {
    try {
      const comments = await pool.query(`SELECT * FROM dinnerproduct`);

      res.status(200).json({ dinnerproduct: comments.rows });
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
}

export default Dinner;
