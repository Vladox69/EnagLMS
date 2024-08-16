import { useRouter } from 'next/router'
import React from 'react'
import { FormAStudent } from '../../../components/admin/student/FormAStudent';

export const EditStudent = () => {
    const router = useRouter()
    const {student_id}=router.query
    return (
    <>
        <FormAStudent student_id={Number(student_id)} />
    </>
  )
}
export default EditStudent;

