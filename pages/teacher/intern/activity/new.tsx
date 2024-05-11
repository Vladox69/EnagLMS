import { Layout } from '@/components/layouts'
import { FormInternActivity } from '@/components/teacher/Intern/FormInternActivity'
import { useRouter } from 'next/router'
import React from 'react'

export const NewInternActivity = () => {
    const router = useRouter()
    const {intern_id}=router.query
  return (
    <Layout>
        <FormInternActivity course_id={Number(intern_id)} />
    </Layout>
  )
}

export default NewInternActivity