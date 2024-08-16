import { useRouter } from 'next/router';
import React from 'react'
import { FormRegisterAsistance } from '../../../../components/teacher/Asistance/FormRegisterAsistance';

export const EditRegisterAsistance = () => {
    const router=useRouter();
    const {asistance_id}=router.query
      
    return (
    <>
        <FormRegisterAsistance  asistance_id={Number(asistance_id)}/>
    </>
  )
}

export default EditRegisterAsistance;