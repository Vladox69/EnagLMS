import { enagApi } from '@/apis'
import { Layout } from '@/components/layouts'
import { StudentModel } from '@/models'
import React, { useEffect, useState } from 'react'
import { TableAStudent } from '../../../components/admin/student/TableAStudent';

export default function Teachers() {

const [students, setStudents] = useState<StudentModel[]>([])

  useEffect(() => {
    getData();
  }, [])
  

  const getData=async()=>{
    const {data}=await enagApi.get<StudentModel[]>(`/students`)
    setStudents(data)
  }

  return (
    <Layout>
        <TableAStudent  students={students!} />
    </Layout>
  )
}