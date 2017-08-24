import * as React from "react";
import { connect } from 'react-redux';

import {IState} from '../../models/IState'
import {ITask} from '../../models/ITask'
import {CheckList,ICheckListOwnProps,ICheckListPassedProps} from './CheckListView'

import {TaskActionCreators} from '../../actions/TaskActionCreators'

const mapStateToProps=(state:IState)=>({}
);

const mapDispatchToProps=(dispatch:any)=>(
    {
        addTask:(cartId:number,newTask:ITask)=>(dispatch(TaskActionCreators.AddTask(cartId,newTask))),
        deleteTask:(cartId:number,deletedTask:ITask)=>(dispatch(TaskActionCreators.DeleteTask(cartId,deletedTask))),
        toggleTask:(cartId:number,changedTask:ITask)=>(dispatch(TaskActionCreators.ToggleTask(cartId,changedTask)))
    }
);

export default connect<{},ICheckListOwnProps,ICheckListPassedProps>(null,mapDispatchToProps)(CheckList);