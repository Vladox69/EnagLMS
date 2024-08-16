import React from 'react'
import { FormACourse } from '@/components/admin/course/FormACourse';
import { useRouter } from 'next/router';

export const EditCourse = () => {
    const router = useRouter()
    const {course_id}=router.query
  return (
    <>
        <FormACourse course_id={Number(course_id)} />
    </>
  )
}
export default EditCourse