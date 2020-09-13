import Tasks from '../models/listModel'
import { Request, Response } from 'express'

export default class ListController {

    async getList(req: Request, res: Response) {
        const tasks = await Tasks.find()
        res.send(tasks)
    }

    async addTasks(req: Request, res: Response) {
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
}

