import { Router } from "express";
import Categories from "./categories.controller";

const { getCategories } = new Categories();

const router = Router().get("/categories", getCategories);

export default router;
