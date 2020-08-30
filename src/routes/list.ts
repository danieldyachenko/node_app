import {Router, json} from 'express'
import Tasks from './../models/list'
import { Request, Response } from 'express'

const router: Router = Router()
const jsonParser = json();

router.get('/list', async (req: Request, res: Response) => {
    const tasks = await Tasks.find({})
    res.send(tasks)
})

router.post('/task', jsonParser, async (req: Request, res: Response) => {

    const tasks = new Tasks({
        text: req.body.text,
        isPerformed: req.body.isPerformed,
        isTagged: req.body.isTagged,
        date: req.body.date
    })

    await tasks.save(err => {
        if (err) return console.log(err);
        res.send(tasks)
    })
})

export default router