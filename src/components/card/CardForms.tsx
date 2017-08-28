import * as React from 'react';
import {IDraftCard} from '../../models/ICard';
import {IChange,ISubmit} from '../../models/common'

interface ICardFormProps{
    buttonLabel:string,
    draftCard:IDraftCard,
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
            <form onSubmit={(e)=>props.handleSubmit(e)}>
            <input type='text'
                   value={this.props.draftCard.title}
                   onChange={(e)=>handleChange('title',e,props)}
                   placeholder="Title"
                   required={true}
                   autoFocus={true} /><br />
            <textarea value={this.props.draftCard.description}
                      onChange={this.handleChange.bind(this,'description')}
                      placeholder="Description"
                      required={true} /><br />
            </form>
        </div>
    )
}