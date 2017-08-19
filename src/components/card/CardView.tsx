import * as React from 'react';
import {ICard} from '../../models/ICard'
import {CheckList} from '../checkList/CheckListView'

interface ICardProps{
    card:ICard
}

export const Card:React.SFC<ICardProps>=(props)=>{
    return(
        <div className="card">
            <div className="card__title">{props.card.title}</div>
            <div className="card__details">
                {props.card.description}
                <CheckList tasks={props.card.tasks} cardId={props.card.id} />
            </div>
        </div>
    )
}