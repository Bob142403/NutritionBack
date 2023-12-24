import { Router } from "express";
import Feedback from "./comment.controller";

const { insert, getComments } = new Feedback();

const router = Router().post("/insert", insert).get("/getAll", getComments);

export default router;
