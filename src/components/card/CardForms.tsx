import * as React from 'react';
import {ICard} from '../../models/ICard';
import {IChange,ISubmit} from '../../models/common'

interface ICardFormProps{
    buttonLabel:string,
    draftCard:ICard,
    handleChange:IChange,
    handleSubmit:ISubmit,
    handleClose:ISubmit
}

const handleChange=(field:string,e:any,props:ICardFormProps)=>{
    props.handleChange(field,e.target.value);
}

const handleClose=(e:any,props:ICardFormProps)=>{
    e.preventDefault();
    props.handleClose(e);
}


export const CardForm:React.SFC<ICardFormProps>=(props)=>{
    return(
        <div>
            <div className="card big">
                <form onSubmit={(e)=>props.handleSubmit(e)}>
                <input type='text'
                    value={props.draftCard.title}
                    onChange={(e)=>handleChange('title',e,props)}
                    placeholder="Title"
                    required={true}
                    autoFocus={true} /><br />
                <textarea value={props.draftCard.description}
                        onChange={(e)=>handleChange('description',e,props)}
                        placeholder="Description"
                        required={true} /><br />
                        <label htmlFor="status">Status</label>
                <select id="status"
                        value={props.draftCard.status}
                        onChange={(e)=>handleChange('status',e,props)}>
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
                </select>
                <br />
                <label htmlFor="color">Color</label>
                <input id="color"
                    value={props.draftCard.color}
                    onChange={(e)=>handleChange('color',e,props)}
                    type="color" />

                <div className='actions'>
                <button type="submit">{props.buttonLabel}</button>
                </div>
                </form>
            </div>
            <div className="overlay" onClick={(e)=>handleClose(e,props)}></div>
        </div>
        
    )
}