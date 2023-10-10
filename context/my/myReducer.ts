import { Course } from "@/interface";
import { MyState } from "./MyProvider";
import { StudentModel, UserModel } from "@/models";

type MyType =
    | { type: '[My] Get-Data', payload: { courses: Course[],user:UserModel|StudentModel } }


export const myReducer = (state: MyState, action: MyType): MyState => {
    switch (action.type) {
        case '[My] Get-Data':
            return {
                ...state,
                courses: [...action.payload.courses],
                user:action.payload.user
            };

        default:
            return state;
    }
}