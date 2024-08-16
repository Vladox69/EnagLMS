import { FormRegisterAsistance } from '@/components/teacher/Asistance/FormRegisterAsistance'
import React from 'react'
import { useRouter } from 'next/router';

 const NewRegisterAsistance = () => {
    const router=useRouter();
    const {module_id}=router.query
  return (
    < >
       <FormRegisterAsistance module_id={Number(module_id)} />
    </>
  )
}
export default NewRegisterAsistance;