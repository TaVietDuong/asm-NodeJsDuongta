import express from "express";
import mongoose from "mongoose";
import ProductsRouter from "../router/products"
const app = express()   
app.use(express.json());
app.use("/api",ProductsRouter);
mongoose.connect("mongodb://127.0.0.1/we17307")
export const viteNodeApp = app
