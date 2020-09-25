import taskModel from '../models/taskModel'
import { Controller, TaskModel } from '../types/list';

export default class ListController {

    getList: Controller = async (req, res) => {
        const taskDocument = await taskModel.find()
        res.send(taskDocument)
    }

    getTask: Controller = (req, res) => {
        taskModel.findOne({ _id: req.params.id }, (err, task) => {
            if (err) console.log(err)
            res.send(task);
        })
    }

    addTask: Controller = async (req, res) => {
        const taskDocument = new taskModel({
            text: req.body.text,
            isPerformed: req.body.isPerformed,
            isTagged: req.body.isTagged,
            date: req.body.date
        })

        await taskDocument.save(err => {
            if (err) console.log(err);
            res.send(taskDocument)
        })

        //validate
        //taskDocument.validate(error => assert(error.errors['text'].message, 'is not a valid text'))
    }

    deleteTask: Controller = (req, res) => {
        const id = req.params.id
        taskModel.findByIdAndDelete(id, (err, tasks) => {
            if (err) console.log(err)
            res.send(tasks)
        })
    }

    updateTask: Controller = async (req, res) => {
        try {
            if (!req.body) return res.sendStatus(400)
            const taskDocument: TaskModel | null = await taskModel.findById(req.body.id)
            await taskDocument?.updateOne({_id: req.body.id}, Object.assign(taskDocument, req.body))
            res.send(taskDocument);
        } catch (e) {
            console.log(e)
        }
    }
}

