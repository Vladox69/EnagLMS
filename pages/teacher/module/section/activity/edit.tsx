import { Layout } from '@/components/layouts'
import React from 'react'
import { FormActivity } from '../../../../../components/teacher/Activity/FormActivity';
import { useRouter } from 'next/router';

export const EditActivity = () => {
    const router=useRouter()
    const {activity_id}=router.query
  return (
    <Layout>
        <FormActivity  activity_id={Number(activity_id)} />
    </Layout>
  )
}


export default EditActivity;