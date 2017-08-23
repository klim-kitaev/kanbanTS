import {ICard} from '../models/ICard'
import {IAction,IActionResult} from '../models/common'
import {RECEIVE_CARDS,RECEIVE_CREATE_TASK} from '../models/constants'
import {IFetchCarsActions} from '../actions/CardsActionCreators'
import {ITaskAction} from '../actions/TaskActionCreators'
import {DeepCopy} from '../api/utilites'
import {ITask} from '../models/ITask'

export const cardsReducer=(state:ICard[]=[],action:IActionResult)=>{
    let newTask:ITask;
    let cardIndex:number;
    let taskIndex:number;
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
        default:
            return state;
    }
}