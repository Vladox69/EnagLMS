import { Layout } from '@/components/layouts'
import { useRouter } from 'next/router'
import React from 'react'
import { FormActivityResource } from '../../../../../../components/teacher/Activity/Resource/FormActivityResource';

export const NewActivityResource = () => {

    const router = useRouter()
    const { activity_id } = router.query

    return (
        <Layout>
            <></>
            {/* <FormActivityResource activity_id={Number(activity_id)}  /> */}
        </Layout>
    )
}

export default NewActivityResource