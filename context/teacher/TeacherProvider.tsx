import { ModuleModel, TeacherModel } from "@/models";
import React, { FC, useReducer, useEffect } from 'react'
import { TeacherContext } from "./TeacherContext";
import { teacherReducer } from "./teacherReducer";
import { enagApi } from "@/apis";

export interface TeacherState {
    modules: ModuleModel[];
    teacher: TeacherModel | null;
    active_module:ModuleModel|null;
}

interface Props {
    children: React.ReactNode;
}

const TEACHER_INITIAL_STATE: TeacherState = {
    modules: [],
    teacher: null,
    active_module:null,
}

export const TeacherProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(teacherReducer, TEACHER_INITIAL_STATE)

    const getDataTeacher = async () => {
        // Vamos a obtener quien es el profesor y todos sus módulos 
        const { data:teacher } = await enagApi.get<TeacherModel>(`/teachers/${3}`);
        const {data:modules}=await enagApi.get<ModuleModel[]>(`/modules/teacher_id=${teacher.id}`);
        dispatch({ type: '[Teacher] Get-Data', payload: { modules, teacher} })
    }

    const setActiveModule=(md:ModuleModel)=>{
        //Poner el modulo activo
        dispatch({type:'[Teacher] Set-active-module',payload:{active_module:md}})
    }

    useEffect(() => {
        getDataTeacher();
    }, [])


    return (
        <TeacherContext.Provider value={{
            ...state,
            setActiveModule
        }}>
            {children}
        </TeacherContext.Provider>
    )
}
