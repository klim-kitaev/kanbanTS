import * as React from "react";
import * as ReactDOM from "react-dom";
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import  KanbanBoard   from "./components/kanbanboard/KanbanBoardComponent";
import {ICard,StatusTypes} from './models/ICard'
import reducres from './reducers/rootReducer'



const logger=(store:any)=>(next:any)=>(action:any)=>{
    if(typeof action != "function"){
        console.log('dispatching:',action);
    }
    return next(action);
}

const kanbanStore=createStore(
    reducres,applyMiddleware(logger,thunk)
);

ReactDOM.render(
    <Provider store={kanbanStore}>
        <KanbanBoard/>
    </Provider>,
    document.getElementById("root")
);