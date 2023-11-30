import { Layout } from '@/components/layouts';
import React from 'react'
import { FormAUser } from '../../../components/admin/user/FormAUser';

export const NewUser = () => {
  return (
    <Layout>
        <FormAUser />
    </Layout>
  )
}

export default NewUser;