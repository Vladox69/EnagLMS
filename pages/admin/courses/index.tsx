import { Layout } from '@/components/layouts'
import React, { useEffect, useState } from 'react'
import { TableACourse } from '../../../components/admin/course/TableACourse';
import { CourseModel } from '@/models';
import { enagApi } from '@/apis';


export default function Courses() {

  const [courses, setCourses] = useState<CourseModel[]>([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { data } = await enagApi.get<CourseModel[]>(`/courses`)
    setCourses(data)
  }

  return (
    <Layout>
      <TableACourse courses={courses} />
    </Layout>
  )
}
