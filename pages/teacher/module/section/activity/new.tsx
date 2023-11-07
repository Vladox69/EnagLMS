import { Layout } from '@/components/layouts'
import { useRouter } from 'next/router'
import React from 'react'
import { FormActivity } from '../../../../../components/teacher/Activity/FormActivity';

export const NewActivity = () => {
    const router = useRouter()
    const { section_id } = router.query

    return (
        <Layout>
            <FormActivity section_id={Number(section_id)} />
        </Layout>
    )
}

export default NewActivity;