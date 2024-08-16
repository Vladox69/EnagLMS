import React from 'react'
import { FormTResource } from '../../../../../components/teacher/Sections/Resource/FormTResource';
import { useRouter } from 'next/router';

export const NewSectionResource = () => {
    const router = useRouter()
    const {section_id}=router.query

    return (
        <>
            {/* <FormTResource  section_id={Number(section_id)}/> */}
            <></>
        </>
    )
}

export default NewSectionResource
