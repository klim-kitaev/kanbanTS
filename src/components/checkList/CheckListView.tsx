import * as React from "react";
import { connect } from 'react-redux';

import {ITask} from '../../models/ITask'
import {IState} from '../../models/IState'
import {IDispatch} from '../../models/common'
import {TaskActionCreators} from '../../actions/TaskActionCreators'


interface IDispatchTask{
    (cartId:number,task:ITask):void;
}

export interface ICheckListPassedProps extends React.Props<any>{
    tasks:ITask[];
    cardId:number;   
}

export interface ICheckListOwnProps extends React.Props<any> {
    addTask:IDispatchTask;
    deleteTask:IDispatchTask;
    toggleTask:IDispatchTask;
}

export class CheckList extends React.Component<ICheckListPassedProps & ICheckListOwnProps, any> {

    checkInputKeyPress(e:any){
        if(e.key==='Enter'){
            let newTask:ITask={
                id:Date.now(),
                name:e.target.value,
                done:false
            };
            this.props.addTask(this.props.cardId,newTask);
            e.target.value='';
        }
    }

    render(){
        let tasks=this.props.tasks.map((task)=>
            <li key={task.id} className="checklist__task">
                <input type="checkbox" checked={task.done} onChange={this.props.toggleTask.bind(null,this.props.cardId,task)}/>
                {task.name}
                <a href="#" onClick={this.props.deleteTask.bind(null,this.props.cardId,task)} className="checklist__task--remove"/>
            </li>
        );

        return (<div className="checklist">
            <ul>{tasks}</ul>
            <input type="text" className="checklist--add-task"
          placeholder="Type then hit Enter to add a task" onKeyPress={this.checkInputKeyPress.bind(this)}/>
        </div>);

    }
}




    

    