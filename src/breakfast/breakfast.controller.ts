import { Request, Response } from "express";
import { pool } from "../../database/pool";

class BreakFast {
  async getGroups(req: Request, res: Response) {
    try {
      const comments = await pool.query(`SELECT * FROM breakfastgroup`);

      res.status(200).json({ breakfastgroup: comments.rows });
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
  async getFoods(req: Request, res: Response) {
    try {
      const comments = await pool.query(`SELECT * FROM breakfastfood`);

      res.status(200).json({ breakfastfood: comments.rows });
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
  async getProducts(req: Request, res: Response) {
    try {
      const comments = await pool.query(`SELECT * FROM breakfastproduct`);

      res.status(200).json({ breakfastproduct: comments.rows });
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
  async insertProduct(req: Request, res: Response) {
    console.log(
      " Object.keys(req.body).map((key) => req.body[key]): ",
      Object.keys(req.body).map((key) => req.body[key])
    );
    try {
      await pool.query(
        `INSERT INTO breakfastproduct (list_name, name, label::English, label::Tajik, label::Uzbek, Food) 
      VALUES ($1, $2, $3, $4, $5, $6)`,
        Object.keys(req.body).map((key) => req.body[key])
      );

      res.status(200).json("Product Created");
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
}

export default BreakFast;
