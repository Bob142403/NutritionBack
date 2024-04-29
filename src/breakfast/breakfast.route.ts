import { Router } from "express";
import BreakFast from "./breakfast.controller";

const { getFoods, getGroups, getProducts, insertProduct } = new BreakFast();

const router = Router()
  .get("/groups", getGroups)
  .get("/foods", getFoods)
  .get("/products", getProducts)
  .post("/insert/product", insertProduct);

export default router;
