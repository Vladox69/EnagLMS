import { Layout } from '@/components/layouts'
import React from 'react'
import { FormSection } from '../../../../components/teacher/Sections/FormSection';
import { useRouter } from 'next/router';

export const NewSection = () => {
    const router=useRouter();
    const {module_id}=router.query
  return (
    <Layout title='Nueva sección'>
        <FormSection  module_id={Number(module_id)} />
    </Layout>
  )
}

export default NewSection;