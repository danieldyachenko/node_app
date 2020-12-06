import { Request, Response } from 'express';
import { Document } from 'mongoose';

export interface Task {
  id: string;
  text: string;
  isPerformed: boolean;
  isTagged: boolean;
  date: string;
}

export type Handler = (req: Request, res: Response) => void;

export interface ITaskModel extends Task, Document {}
