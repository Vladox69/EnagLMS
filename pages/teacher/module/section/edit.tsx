import { Layout } from '@/components/layouts'
import React from 'react'
import { FormSection } from '../../../../components/teacher/Sections/FormSection';
import { useRouter } from 'next/router';

export const EditSection = () => {
    const router=useRouter()
    const {section_id}=router.query;

    return (
    <Layout>
        <FormSection  section_id={Number(section_id)} />
    </Layout>
  )
}

export default EditSection;