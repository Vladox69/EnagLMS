import { ModuleModel, TeacherModel } from "@/models"
import { TeacherState } from "."

type TeacherType=
    |{
    type:'[Teacher] Get-Data',
    payload:{
        modules:ModuleModel[],
        teacher:TeacherModel
    }}
    |{
    type:'[Teacher] Set-active-module'
    payload:{
        active_module:ModuleModel
    }
    }

export const teacherReducer=(state:TeacherState,action:TeacherType):TeacherState=>{
    switch (action.type) {
        case '[Teacher] Get-Data':
            return {
                ...state,
                modules:[...action.payload.modules],
                teacher:action.payload.teacher
            }
        case '[Teacher] Set-active-module':
            return {
                ...state,
                active_module:action.payload.active_module
            };
        default:
            return state;
    }
}