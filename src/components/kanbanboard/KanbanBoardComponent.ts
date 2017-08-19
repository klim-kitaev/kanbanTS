import * as React from "react";
import { connect } from 'react-redux';

import {KanbanBoard} from './KanbanBoardView'

import {IState} from '../../models/IState'
import {CardsActionCreators} from '../../actions/CardsActionCreators'

const mapStateToProps=(state:IState)=>(
    {cards:state.cards}
);

const mapDispatchToProps=(dispatch:any)=>(
    {
        fetchCards:()=>(dispatch(CardsActionCreators.fetchCards()))
    }
);

export default connect(mapStateToProps,mapDispatchToProps)(KanbanBoard);