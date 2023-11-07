import React from 'react'
import { Layout } from '@/components/layouts';
import { FormTResource } from '../../../../../components/teacher/Sections/Resource/FormTResource';
import { useRouter } from 'next/router';

export const NewSectionResource = () => {
    const router = useRouter()
    const {section_id}=router.query

    return (
        <Layout>
            <FormTResource  section_id={Number(section_id)}/>
        </Layout>
    )
}

export default NewSectionResource
