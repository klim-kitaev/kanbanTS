import * as React from 'react';
import {ITask} from '../../models/ITask'
import {IDispatch} from '../../models/common'

interface IDispatchAddTask{
    (cartId:number,task:ITask):void;
}

interface ICheckListProps{
    tasks:ITask[];
    cardId:number;
    addTask:IDispatchAddTask
}

const checkInputKeyPress = (e:any,props:ICheckListProps):void=>{
    if(e.key==='Enter'){
        let newTask:ITask={
            id:Date.now(),
            name:e.target.value,
            done:false
        };
        props.addTask(props.cardId,newTask);
        e.target.value='';
    }
}

export const CheckList:React.SFC<ICheckListProps>= (props) =>{

    let tasks=props.tasks.map((task)=>
        <li key={task.id} className="checklist__task">
            <input type="checkbox" checked={task.done}/>
            {task.name}
            <a href="#" className="checklist__task--remove"/>
        </li>
    );

    return (<div className="checklist">
        <ul>{tasks}</ul>
    </div>)
}