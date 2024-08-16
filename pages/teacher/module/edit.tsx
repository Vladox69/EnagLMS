import { FormTModule } from "@/components/teacher/Module/FormTModule";
import { useRouter } from "next/router";
import React from "react";

export const EditModuleById = () => {
  const router = useRouter()
  const {id}=router.query
  return (
    <>
      <FormTModule module_id={Number(id)} />
    </>
  );
};

export default EditModuleById;
