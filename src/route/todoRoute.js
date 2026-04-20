import express from "express";
import { createTodo, getAllTodo } from "../controller/todoController.js";

const todoRoute = express.Router();

todoRoute.post('/new', createTodo)
todoRoute.get('/getAll', getAllTodo)

export default todoRoute;