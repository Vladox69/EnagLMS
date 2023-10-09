import { Course } from '@/interface'
import React, { FC, useEffect, useReducer } from 'react'
import { MyContext } from './MyContext';
import { myReducer } from './myReducer';

export interface MyState {
    courses: Course[];
}

interface Props {
    children: React.ReactNode;
}

const MY_INITIAL_STATE: MyState = {
    courses: [],
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
        dispatch({type:'[My] Get-Data',payload:data})
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
