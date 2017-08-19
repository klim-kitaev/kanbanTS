import {ICard} from '../models/ICard'
import {IAction} from '../models/common'
import {RECEIVE_CARDS} from '../models/constants'
import {IFetchCarsActions} from '../actions/CardsActionCreators'
import {DeepCopy} from '../api/utilites'

export const cardsReducer=(state:ICard[]=[],action:IAction)=>{
    switch(action.type){
        case RECEIVE_CARDS:
            return DeepCopy<IFetchCarsActions>(action).cards;
        default:
            return state;
    }
}