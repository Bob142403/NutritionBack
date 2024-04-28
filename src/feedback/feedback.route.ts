import { Router } from "express";
import Feedback from "./feedback.controller";

const { insert } = new Feedback();

const router = Router().post("/insert", insert);

export default router;
