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


