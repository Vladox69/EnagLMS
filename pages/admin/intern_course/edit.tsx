import { Layout } from "@/components/layouts";
import React from "react";
import { FormInternCourse } from "@/components/admin/intern-course/FormInternCourse";
import { useRouter } from "next/router";

export const EditInternCourse = () => {
  const router = useRouter();
  const { course_id } = router.query;
  return (
    <Layout>
      <FormInternCourse course_id={Number(course_id)} />
    </Layout>
  );
};

export default EditInternCourse;
