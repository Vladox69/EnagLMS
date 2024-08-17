import { FormAModule } from "@/components/admin/course/FormAModule";
import { useRouter } from "next/router";
import React from "react";

export const NewModule = () => {
  const router = useRouter();
  const { course_id } = router.query;
  return (
    <>
      <FormAModule course_id={Number(course_id)} />
    </>
  );
};

export default NewModule