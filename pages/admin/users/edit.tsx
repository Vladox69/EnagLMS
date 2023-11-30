import React from 'react'
import { Layout } from '@/components/layouts';
import { FormAUser } from '@/components/admin/user/FormAUser';
import { useRouter } from 'next/router';

export const EditUser = () => {
    const router=useRouter()
    const {user_id}=router.query
  return (
    <Layout>
        <FormAUser  user_id={Number(user_id)}  />
    </Layout>
  )
}

export default EditUser