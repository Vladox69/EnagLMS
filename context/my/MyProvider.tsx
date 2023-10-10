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
        
        const data: Course[] = [{
            _id: '1111',
            description: 'Primero',
            start_date: '01-01-2023',
            end_date: '06-01-2023',
            topic: 'Panaderia',
            teacher_id: '111233'
        },
        {
            _id: '2222',
            description: 'Segundo',
            start_date: '01-01-2023',
            end_date: '06-01-2023',
            topic: 'Pasateleria',
            teacher_id: '111244'
        }]
        // const dUser: UserModel = {
        //     email: 'student',
        //     id: 11,
        //     password: 'student',
        //     photo_url: '',
        //     rol: 'STUDENT',
        //     username: 'student'
        // }

        const { data: user } = await enagApi.get<UserModel>(`/users/${1}`);
        
        const {data:student}=await enagApi.get<StudentModel>(`/students/${1}`);
        
        const {data:inscriptions}=await enagApi.get<InscriptionModel[]>(`/inscriptions/${student.id}`);

        const coursesPromises = inscriptions.map(async(insc)=>{
            const {data:course}= await enagApi.get<CourseModel>(`/courses/${insc.course_id}`)
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
