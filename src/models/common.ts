export interface IAction{
    type:string
}

export interface IActionResult extends IAction{
    success:boolean
}

export interface IActionErrorResult extends IActionResult{
    error:string
}

export interface IDispatch{
    ():void;
}

export interface ISubmit{
    (e:any):void;
}

export interface IChange{
    (field:string,value:string):void;
}


