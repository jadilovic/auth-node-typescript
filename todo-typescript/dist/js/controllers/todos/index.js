"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0;
const todo_1 = __importDefault(require("../../models/todo"));
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find();
        res.status(200).json(todos);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Failed to get todos' });
    }
});
exports.getTodos = getTodos;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const todo = new todo_1.default({
            name: body.name,
            description: body.description,
            status: body.status,
        });
        const newTodo = yield todo.save();
        const todos = yield todo_1.default.find();
        res.status(201).json({ message: 'New todo was created', newTodo, todos });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Failed to create new todo' });
    }
});
exports.addTodo = addTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const updatedTodo = yield todo_1.default.findByIdAndUpdate({ _id: id }, body);
        const todos = yield todo_1.default.find();
        res.status(202).json({ message: 'Todo was updated', updatedTodo, todos });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Failed to update todo' });
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedTodo = yield todo_1.default.findByIdAndRemove({ _id: id });
        const todos = yield todo_1.default.find();
        res.status(202).json({ message: 'Todo was updated', deletedTodo, todos });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Failed to delete todo' });
    }
});
exports.deleteTodo = deleteTodo;
