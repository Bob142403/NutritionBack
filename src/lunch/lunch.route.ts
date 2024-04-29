import { Router } from "express";
import Lunch from "./lunch.controller";

const { getFoods, getGroups, getProducts } = new Lunch();

const router = Router()
  .get("/groups", getGroups)
  .get("/foods", getFoods)
  .get("/products", getProducts);

export default router;
