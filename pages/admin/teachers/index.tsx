import { enagApi } from '@/apis'
import { Layout } from '@/components/layouts'
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
        <Layout>
            <TableATeachers teachers={teachers!} />
        </Layout>
    )
}
