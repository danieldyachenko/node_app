import Tasks from '../models/listModel'
import { Request, Response } from 'express'
import { Task } from '../types/list';

export default class ListController {

    async getList(req: Request, res: Response) {
        const tasks = await Tasks.find()
        res.send(tasks)
    }

    getTask(req: Request, res: Response) {
        Tasks.findOne({_id: req.params.id}, (err, task) => {
            if (err) console.log(err);
            res.send(task);
        });
    }

    async addTask(req: Request, res: Response) {
        const tasks = new Tasks({
            text: req.body.text,
            isPerformed: req.body.isPerformed,
            isTagged: req.body.isTagged,
            date: req.body.date
        })

        await tasks.save(err => {
            if (err) console.log(err);
            res.send(tasks)
        })
    }
    
    deleteTask(req: Request, res: Response) {
        const id = req.params.id
        Tasks.findByIdAndDelete(id, (err, tasks) => {
            if (err) console.log(err)
            res.send(tasks)
        })
    }
    
    updateTask(req: Request, res: Response) {
        if (!req.body) return res.sendStatus(400)
        const newTask: Task = {
            text: req.body.text,
            isPerformed: req.body.isPerformed,
            isTagged: req.body.isTagged,
            date: req.body.date
        }
        Tasks.findByIdAndUpdate(req.body.id, newTask, {new: true}, (err, task) => {
            if (err) console.log(err);
            res.send(task);
        })
    }
}

