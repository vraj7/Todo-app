const express = require("express");
const router = express.Router();

const {
  addTodo,
  getTodoById,
  deleteTodoById,
  getAllTodoTask,
  updateTodoById,
} = require("../controllers/Todo");



// to get all the todos
router.get("/", getAllTodoTask);

// to get a single todo
router.get("/:id", getTodoById);

// to create a todo
router.post("/", addTodo);

// to update the todo
router.patch("/:id", updateTodoById);

// to delete the todo
router.delete("/:id", deleteTodoById);

module.exports = router;
