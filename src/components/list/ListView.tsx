import * as React from 'react';
import {ICard} from '../../models/ICard'
import {Card} from '../card/CardView'

interface IListProps{
    cards:ICard[],
    title:string
}

 const List:React.SFC<IListProps>=(props)=>{

    let cards=props.cards.map((card)=>{
        return <Card card={card} key={card.id}/>
    })

    return(
        <div className="list">
            <h1>{props.title}</h1>
            {cards}
        </div>
    )
}

export default List