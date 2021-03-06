import {IAction,IActionResult,IActionErrorResult} from '../models/common'
import {ITask} from '../models/ITask'
import {REQUEST_CREATE_TASK,RECEIVE_CREATE_TASK,REQUEST_DELETE_TASK,RECEIVE_DELETE_TASK,REQUEST_TOGGLE_TASK,RECEIVE_TOGGLE_TASK} from '../models/constants'
import KanbanAPI from '../api/KanbanAPI'

export interface ITaskAction extends IActionResult{
    cartId:number,
    task:ITask
}
/*
export interface ITaskIndexAction extends ITaskAction{
    taskIndex:number
}
*/
export class TaskActionCreators
{
    private static _sendError(type:string,error:string):IActionErrorResult{
        return {type:type,error:error,success:false};
    }

    private static _AddRequestTask(cartId:number,task:ITask):IAction{
        return{type:REQUEST_CREATE_TASK}
    }

    private static _AddRecieveTask(cartId:number,task:ITask):ITaskAction{
        return {type:RECEIVE_CREATE_TASK,task:task,cartId:cartId,success:true};
    }

    static AddTask(cartId:number,task:ITask){
        return async(dispatch:any)=>{
            try{
                this._AddRequestTask(cartId,task);
                let new_task =  await KanbanAPI.addTask(cartId,task);
                dispatch(this._AddRecieveTask(cartId,new_task));
            }
            catch(error){
                dispatch(this._sendError(RECEIVE_CREATE_TASK,error));
            }
        }
    }


    private static _DeleteRequestTask(cartId:number,task:ITask):IAction{
        return{type:REQUEST_DELETE_TASK}
    }

    private static _DeleteRecieveTask(cartId:number,task:ITask):ITaskAction{
        return {type:RECEIVE_DELETE_TASK,task:task,cartId:cartId,success:true};
    }

    static DeleteTask(cartId:number,task:ITask){
        return async(dispatch:any)=>{
            try{
                this._DeleteRequestTask(cartId,task);
                await KanbanAPI.deleteTask(cartId,task);
                dispatch(this._DeleteRecieveTask(cartId,task));
            }
            catch(error){
                dispatch(this._sendError(RECEIVE_DELETE_TASK,error));
            }
        }
    }

    private static _ToggleRequestTask(cartId:number,task:ITask):IAction{
        return{type:REQUEST_TOGGLE_TASK}
    }

    private static _ToggleRecieveTask(cartId:number,task:ITask):ITaskAction{
        return {type:RECEIVE_TOGGLE_TASK,task:task,cartId:cartId,success:true};
    }

    static ToggleTask(cartId:number,task:ITask){
        return async(dispatch:any)=>{
            try{
                this._ToggleRequestTask(cartId,task);
                await KanbanAPI.toogleTask(cartId,task);
                dispatch(this._ToggleRecieveTask(cartId,task));
            }
            catch(error){
                dispatch(this._sendError(RECEIVE_TOGGLE_TASK,error));
            }
        }
    }

}