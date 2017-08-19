import {ITask} from './ITask'


export interface ICard
{
    id:number;
    title:string;
    description:string;
    status:StatusTypes;
    tasks:ITask[];
}

export enum StatusTypes
{
    ToDo="todo",
    InProgress="in-progress",
    Done="done"
}