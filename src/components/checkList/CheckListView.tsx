import * as React from 'react';
import {ITask} from '../../models/ITask'

interface ICheckListProps{
    tasks:ITask[];
    cardId:number;
}

export const CheckList:React.SFC<ICheckListProps>= (props) =>{
    let tasks=props.tasks.map((task)=>
        <li key={task.id} className="checklist__task">
            <input type="checkbox" defaultChecked={task.done}/>
            {task.name}
            <a href="#" className="checklist__task--remove"/>
        </li>
    );
    return (<div className="checklist">
        <ul>{tasks}</ul>
    </div>)
}