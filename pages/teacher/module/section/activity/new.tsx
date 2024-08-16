import { useRouter } from 'next/router'
import React from 'react'
import { FormActivity } from '../../../../../components/teacher/Activity/FormActivity';

export const NewActivity = () => {
    const router = useRouter()
    const { section_id } = router.query

    return (
        <>
            <FormActivity section_id={Number(section_id)} />
        </>
    )
}

export default NewActivity;