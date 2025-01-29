import express from 'express';
import * as tasksController from "./controller";

export const tasksRouter = express.Router();

tasksRouter.post("/new-tasks", tasksController.createTasks);
tasksRouter.get("/tasks", tasksController.getAllTasks);