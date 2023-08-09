"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
router
    .get('/todos', todos_1.getTodos)
    .post('/add-todo', todos_1.addTodo)
    .put('/update-todo/:id', todos_1.updateTodo)
    .delete('/delete-todo/:id', todos_1.deleteTodo);
exports.default = router;
