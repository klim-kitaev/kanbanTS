import * as React from "react";

export interface HelloProps {compiller: string, framework:string}

export const Hello=(props:HelloProps)=><h1>Hello from {props.compiller} and {props.framework}</h1>;


