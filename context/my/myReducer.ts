import { Course } from "@/interface";
import { MyState } from "./MyProvider";

type MyType=
|{type:'[My] Get-Data',payload:Course[]}


export const myReducer=(state:MyState,action:MyType):MyState=>{
    switch (action.type) {
        case '[My] Get-Data':
            return {
                ...state,
                courses:[...action.payload]
            };
    
        default:
            return state;
    }
}