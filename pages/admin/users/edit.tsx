import React from 'react'
import { FormAUser } from '@/components/admin/user/FormAUser';
import { useRouter } from 'next/router';

export const EditUser = () => {
    const router=useRouter()
    const {user_id}=router.query
  return (
    <>
        <FormAUser  user_id={Number(user_id)}  />
    </>
  )
}

export default EditUser