import { Request, Response } from "express";
import { pool } from "../../database/pool";

class Feedback {
  async insert(req: Request, res: Response) {
    const { formId, feedback } = req.body;

    try {
      await pool.query(
        `INSERT INTO feedback (formId, feedback) 
      VALUES ($1, $2)`,
        [formId, feedback]
      );

      res.status(200).json("Feedback Created");
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
  }
}

export default Feedback;
