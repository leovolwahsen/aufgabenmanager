import { Request, Response } from 'express';
import { tasksCollection } from '../../config/database';

export const createTasks = async (req: Request, res: Response): Promise<void> => {
try {
    const newTasks = req.body;
    const result = await tasksCollection.insertOne(newTasks);

    res.status(201).send(result);
} catch (error) {
        console.error(`Failed to create tasks: ${error}`);
        res.status(500).send({ error: "Failed to create tasks" });
    }
};

export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await tasksCollection.find({}).toArray();

        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to fetch tasks" });
    }
};