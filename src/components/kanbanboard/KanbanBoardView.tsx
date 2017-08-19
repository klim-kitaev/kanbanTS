import * as React from 'react';
import {ICard,StatusTypes} from '../../models/ICard'
import List from '../list/ListView'
import {IDispatch} from '../../models/common'


interface IKanbanBoardProps{
    cards:ICard[],
    fetchCards:IDispatch
}


export class KanbanBoard extends React.Component<IKanbanBoardProps, any> {

    componentDidMount() {
      this.props.fetchCards();
    }

  render() {
    return (
        <div className="app">
            <List key="todo" title="To Do" cards={this.props.cards.filter((card)=>card.status===StatusTypes.ToDo)} />
            <List key="in-progress" title="In Progress" cards={this.props.cards.filter((card)=>card.status===StatusTypes.InProgress)} />
            <List key="done" title="Done" cards={this.props.cards.filter((card)=>card.status===StatusTypes.Done)} />
        </div>
    );
  }
}

