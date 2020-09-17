import { Request, Response } from 'express'

export type Task = {
    text: string,
    isPerformed: boolean,
    isTagged: boolean,
    date: string
}

export type Controller = (req: Request, res: Response) => void