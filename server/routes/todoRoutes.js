import express from "express"
import { createToDo, deleteTodo, editTodo, getTodos, home } from "../controllers/todoControllers.js"

const router = express.Router()

// router.get("/", home)

router.post("/create", createToDo)
router.get("/get", getTodos)
router.post("/update", editTodo)
router.delete("/delete", deleteTodo)


export default router