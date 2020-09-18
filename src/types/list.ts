import { Request, Response } from 'express'
import {Model, model, Document} from 'mongoose'

export type Task = {
    text: string,
    isPerformed: boolean,
    isTagged: boolean,
    date: string
}

export type Controller = (req: Request, res: Response) => void

export interface TaskModel extends Task, Document {
    getDate(): string
    universalDateFormat: string
}
