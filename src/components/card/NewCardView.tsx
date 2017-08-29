import * as React from 'react';

import {ICard} from '../../models/ICard';
import {IDispatch} from '../../models/common';
import {CardForm} from './CardForms'


interface IDispatchUpdateDraft{
    (field:string,value:string):void;
}

interface IDispatchAddCard{
    (draft:ICard):void;
}

interface INewCardProps {
    draft:ICard,
    createDraft:IDispatch,
    updateDraft:IDispatchUpdateDraft,
    addCart:IDispatchAddCard
};


class NewCard extends React.Component<INewCardProps, any> {

    componentDidMount() {
        this.props.createDraft();
    }
    
    handleChange(field: string,value:string){
        this.props.updateDraft(field,value);
    }

    handleSubmit(e:any){
        e.preventDefault();
        this.props.addCart(this.props.draft);
    }

    handleClose(e:any){

    }

    public render(): JSX.Element {
        return (<CardForm draftCard={this.props.draft} buttonLabel="Create Card" handleChange={this.handleChange.bind(this)} 
        handleClose={this.handleClose.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>);
    }
}

export default NewCard;
