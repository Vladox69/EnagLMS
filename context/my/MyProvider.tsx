import { Course } from '@/interface'
import React, { FC, useEffect, useReducer } from 'react'
import { MyContext } from './MyContext';
import { myReducer } from './myReducer';
import { CourseModel, InscriptionModel, UserModel } from '@/models';
import { enagApi } from '@/apis';
import { StudentModel } from '@/models/student';

export interface MyState {
    courses: CourseModel[];
    user: UserModel |StudentModel | null;
    inscriptions:InscriptionModel[]
}

interface Props {
    children: React.ReactNode;
}

const MY_INITIAL_STATE: MyState = {
    courses: [],
    user: null,
    inscriptions:[]
}

export const MyProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(myReducer, MY_INITIAL_STATE);

    const getData = async () => {
        
        // const dUser: UserModel = {
        //     email: 'student',
        //     id: 11,
        //     password: 'student',
        //     photo_url: '',
        //     rol: 'STUDENT',
        //     username: 'student'
        // }

        const { data: user } = await enagApi.get<UserModel>(`/users/${1}`);
        
        const {data:student}=await enagApi.get<StudentModel>(`/students/student_id=${1}`);
        
        const {data:inscriptions}=await enagApi.get<InscriptionModel[]>(`/inscriptions/student_id=${student.id}`);

        const coursesPromises = inscriptions.map(async(insc)=>{
            const {data:course}= await enagApi.get<CourseModel>(`/courses/course_id=${insc.course_id}`)
            return course;
        })
        
        const courses=await Promise.all(coursesPromises);

        dispatch({ type: '[My] Get-Data', payload: { courses, user:student,inscriptions } })
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <MyContext.Provider value={{
            ...state
        }} >
            {children}
        </MyContext.Provider>
    )
}
