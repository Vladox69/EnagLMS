import { MyState } from "./MyProvider";
import { CourseModel, InscriptionModel, StudentModel, UserModel } from "@/models";

type MyType =
    | { type: '[My] Get-Data', payload: { courses: CourseModel[],user:UserModel|StudentModel,inscriptions:InscriptionModel[] } }


export const myReducer = (state: MyState, action: MyType): MyState => {
    switch (action.type) {
        case '[My] Get-Data':
            return {
                ...state,
                courses: [...action.payload.courses],
                inscriptions:[...action.payload.inscriptions],
                user:action.payload.user
            };

        default:
            return state;
    }
}