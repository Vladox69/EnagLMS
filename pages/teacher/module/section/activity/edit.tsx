import React from 'react'
import { FormActivity } from '../../../../../components/teacher/Activity/FormActivity';
import { useRouter } from 'next/router';

export const EditActivity = () => {
    const router=useRouter()
    const {activity_id}=router.query
  return (
    <>
        <FormActivity  activity_id={Number(activity_id)} />
    </>
  )
}


export default EditActivity;