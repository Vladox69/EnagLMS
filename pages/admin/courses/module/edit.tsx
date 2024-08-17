import { FormAModule } from "@/components/admin/course/FormAModule";
import { useRouter } from "next/router";
import React from "react";

export const EditModule = () => {
  const router = useRouter();
  const { module_id } = router.query;
  return (
    <>
      <FormAModule module_id={Number(module_id)} />
    </>
  );
};
export default EditModule;
