import { enagApi } from '@/apis'
import { TeacherModel } from '@/models'
import React, { useEffect, useState } from 'react'
import { TableATeachers } from '../../../components/admin/teacher/TableATeachers';

export default function Teachers() {

    const [teachers, setTeachers] = useState<TeacherModel[]>([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const { data } = await enagApi.get<TeacherModel[]>(`/teachers`)
        setTeachers(data)
    }

    return (
        <>
            <TableATeachers teachers={teachers!} />
        </>
    )
}
