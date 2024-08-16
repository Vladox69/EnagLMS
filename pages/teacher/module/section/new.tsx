import React, { useEffect, useState } from 'react'
import { FormSection } from '../../../../components/teacher/Sections/FormSection';
import { useRouter } from 'next/router';

export const NewSection = () => {
    const router=useRouter();
    const [module_id, setModule_id] = useState(0)
    

    useEffect(() => {
      if(router.isReady){
        const {module_id}=router.query
        setModule_id(Number(module_id))
      }
    }, [router.isReady])
    
  return (
    < >
        <FormSection  module_id={module_id} />
    </>
  )
}

export default NewSection;