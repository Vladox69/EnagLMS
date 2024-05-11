import { Layout } from '@/components/layouts'
import { FormInternActivity } from '@/components/teacher/Intern/FormInternActivity'
import { useRouter } from 'next/router'
import React from 'react'

export const EditInternActivity = () => {
  const router =useRouter()
  const {activity_id}=router.query
    return (
    <Layout>
        <FormInternActivity activity_id={Number(activity_id)} />
    </Layout>
  )
}

export default EditInternActivity