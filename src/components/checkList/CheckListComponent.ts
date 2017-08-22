import * as React from "react";
import { connect } from 'react-redux';

import {IState} from '../../models/IState'
import {ITask} from '../../models/ITask'
import {CheckList} from './CheckListView'

import {TaskActionCreators} from '../../actions/TaskActionCreators'

const mapStateToProps=(state:IState)=>({}
);

const mapDispatchToProps=(dispatch:any)=>(
    {
        addTask:(cartId:number,newTask:ITask)=>(dispatch(TaskActionCreators.AddTask(cartId,newTask)))
    }
);

export default connect(mapStateToProps,mapDispatchToProps)(CheckList);