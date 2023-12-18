import { Layout } from '@/components/layouts'
import React from 'react'
import { FormACourse } from '@/components/admin/course/FormACourse';
import { useRouter } from 'next/router';

export const EditCourse = () => {
    const router = useRouter()
    const {course_id}=router.query
  return (
    <Layout>
        <FormACourse course_id={Number(course_id)} />
    </Layout>
  )
}
export default EditCourse