import { ModuleModel, TeacherModel } from "@/models"
import { TeacherState } from "."

type TeacherType=
    |{type:'[Teacher] Get-Data',
    payload:{
        modules:ModuleModel[],
        teacher:TeacherModel
    }}

export const teacherReducer=(state:TeacherState,action:TeacherType):TeacherState=>{
    switch (action.type) {
        case '[Teacher] Get-Data':
            return {
                ...state,
                modules:[...action.payload.modules],
                teacher:action.payload.teacher
            }
        default:
            return state;
    }
}