import {ICard} from '../models/ICard'
import {IAction,IActionResult} from '../models/common'
import {RECEIVE_CARDS,RECEIVE_CREATE_TASK,RECEIVE_DELETE_TASK,RECEIVE_TOGGLE_TASK} from '../models/constants'
import {IFetchCarsActions} from '../actions/CardsActionCreators'
import {ITaskAction} from '../actions/TaskActionCreators'
import {DeepCopy} from '../api/utilites'
import {ITask} from '../models/ITask'

export const cardsReducer=(state:ICard[]=[],action:IActionResult)=>{
    //let newTask:ITask;
    //let cardIndex:number;
    //let taskIndex:number;
    switch(action.type){
        case RECEIVE_CARDS:
            return DeepCopy<IFetchCarsActions>(action).cards;
        case RECEIVE_CREATE_TASK:
            if(action.success){
                let newTask=DeepCopy<ITaskAction>(action).task;
                let cardId=(<ITaskAction>action).cartId;
                let cardIndex=state.indexOf(state.filter(p=>p.id===cardId)[0]);
                state[cardIndex].tasks.push(newTask);
                return DeepCopy<ICard>(state);
            }
        case RECEIVE_DELETE_TASK:
            if(action.success){
                let deletedTaskId=(<ITaskAction>(action)).task.id;
                let cardId=(<ITaskAction>action).cartId;
                let cardIndex=state.indexOf(state.filter(p=>p.id===cardId)[0]);
                let taskIndex=state[cardIndex].tasks.indexOf(state[cardIndex].tasks.filter(p=>p.id===deletedTaskId)[0]);
                state[cardIndex].tasks.splice(taskIndex,1);
                return DeepCopy<ICard>(state);
            }
        case RECEIVE_TOGGLE_TASK:
            if(action.success){
                let changedTaskId=(<ITaskAction>(action)).task.id;
                let cardId=(<ITaskAction>action).cartId;
                let cardIndex=state.indexOf(state.filter(p=>p.id===cardId)[0]);
                let taskIndex=state[cardIndex].tasks.indexOf(state[cardIndex].tasks.filter(p=>p.id===changedTaskId)[0]);
                let task = state[cardIndex].tasks[taskIndex];
                task.done=!task.done;
                return DeepCopy<ICard>(state);
            }
        default:
            return state;
    }
}