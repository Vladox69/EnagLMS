import { FormInternActivity } from '@/components/teacher/Intern/FormInternActivity'
import { useRouter } from 'next/router'
import React from 'react'

export const NewInternActivity = () => {
    const router = useRouter()
    const {intern_id}=router.query
  return (
    <>
        <FormInternActivity course_id={Number(intern_id)} />
    </>
  )
}

export default NewInternActivity