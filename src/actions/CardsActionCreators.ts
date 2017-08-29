import {IAction,IActionResult,IActionErrorResult} from '../models/common'
import {ICard} from '../models/ICard'
import {
    REQUEST_CARDS,
    RECEIVE_CARDS,
    REQUEST_CREATE_CARD,
    RECEIVE_CREATE_CARD,
    CREATE_DRAFT,
    UPDATE_DRAFT

} from '../models/constants'
import KanbanAPI from '../api/KanbanAPI'


export interface IFetchCarsActions extends IActionResult{
    cards:ICard[]
}


export class CardsActionCreators
{
    private static _requestCards():IAction{
        return {type:REQUEST_CARDS}
    }

    private static _recieveCards(cards:ICard[]):IFetchCarsActions{
        return {cards:cards,type:RECEIVE_CARDS,success:true}
    }

    private static _sendError(type:string,error:string):IActionErrorResult{
        return {type:type,error:error,success:false};
    }

    static fetchCards(){
        return async(dispatch:any)=>{
            try{
                dispatch(this._requestCards());
                let cards=await KanbanAPI.fetchCards();
                dispatch(this._recieveCards(cards))
            }
            catch(error){
                dispatch(this._sendError(RECEIVE_CARDS,error));
            }
        }
    }
}
    
}