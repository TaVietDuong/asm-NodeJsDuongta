import express from "express";
import { create, getAll } from "../controller/products";

const router = express.Router();

router.post("/products",create)
router.get("/products",getAll)

export default router