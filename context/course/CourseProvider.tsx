import { Course } from "@/interface";
import React, { FC, useEffect, useReducer } from 'react'
import { courseReducer } from "./courseReducer";
import { CoursesContext } from "./CourseContext";

export interface CourseState{
    courses:Course[]
}

interface Props{
    children:React.ReactNode
}

const COURSE_INITIAL_STATE:CourseState={
    courses:[]
}

export const CourseProvider:FC<Props>=({children})=>{
    const [state, dispatch] = useReducer(courseReducer, COURSE_INITIAL_STATE)
    return (
        <CoursesContext.Provider value={{
            ...state
        }} >
            {children}
        </CoursesContext.Provider>    
    )
}