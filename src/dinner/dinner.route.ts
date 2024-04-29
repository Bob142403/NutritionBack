import { Router } from "express";
import Dinner from "./dinner.controller";

const { getFoods, getGroups, getProducts } = new Dinner();

const router = Router()
  .get("/groups", getGroups)
  .get("/foods", getFoods)
  .get("/products", getProducts);

export default router;
