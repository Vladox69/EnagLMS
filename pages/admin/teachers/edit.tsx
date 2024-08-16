import React from 'react'
import { FormATeacher } from '../../../components/admin/teacher/FormATeacher';
import { useRouter } from 'next/router';

export const EditTeacher = () => {
    const router = useRouter()
    const { teacher_id } = router.query
    return (
        <>
            <FormATeacher teacher_id={Number(teacher_id)} />
        </>
    )
}
export default EditTeacher;