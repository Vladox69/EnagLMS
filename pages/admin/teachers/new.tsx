import React from 'react'
import { Layout } from '@/components/layouts';
import { FormATeacher } from '../../../components/admin/teacher/FormATeacher';

export const NewTeacher = () => {
  return (
    <Layout  title='Nuevo profesor' >
        <FormATeacher />
    </Layout>
  )
}

export default NewTeacher;