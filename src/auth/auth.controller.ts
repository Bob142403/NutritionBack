import { Request, Response } from "express";
import { pool } from "../../database/pool";
import jsonwebtoken from "jsonwebtoken";
import { jwtConfig } from "../config/jwt";
import SignIn from "../types/SignIn";

class Auth {
  async signIn(req: Request, res: Response) {
    const { username } = req.body;

    try {
      const user = await pool.query(`SELECT * FROM users WHERE username = $1`, [
        username,
      ]);

      const token = jsonwebtoken.sign(req.body, jwtConfig.privateKey);

      if (!user.rowCount) {
        res.status(404).json("Incorrect UserName or Passsword");
      } else res.status(200).json({ token, user });
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }

    return req.body;
  }
  async auth(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      if (!token) return res.status(400).json("Token is not verifed!");

      const user = jsonwebtoken.verify(token, jwtConfig.privateKey) as SignIn;
      const userInfo = await pool.query(
        `SELECT * FROM users WHERE username = $1`,
        [user.username]
      );

      if (userInfo.rowCount) res.status(200).json(userInfo);
      else res.status(400).json("Error");
    } catch (err) {
      res.status(400).json("Token is not verifed!");
    }
  }
  async signUp(req: Request, res: Response) {
    const {
      username,
      email,
      district: disctrict,
      village,
      gender,
      fio,
      password,
      birthday,
      telephone,
      jamoat,
      fromWho,
    } = req.body;

    try {
      const userCheck = await pool.query(
        `SELECT * FROM users WHERE username = $1`,
        [username]
      );
      if (userCheck.rowCount) {
        res.status(400).json("This username is already Excist");
        return req.body;
      }

      await pool.query(
        `INSERT INTO users (username, disctrict, email, fio, gender, jamoat, password, telephone, village, birthday, fromWho) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
        [
          username,
          disctrict,
          email,
          fio,
          gender,
          jamoat,
          password,
          telephone,
          village,
          birthday,
          fromWho,
        ]
      );

      res.status(200).json("User Created");
    } catch (err) {
      res.status(400).json("UnExpected Error");
    }
    return req.body;
  }
}

export default Auth;
