import React, { useEffect, useState } from "react";
import { Layout } from "@/components/layouts";
import { Container } from "@mui/material";
import { TableInternCourse } from "@/components/admin/intern-course/TableInternCourse";
import { InternCourseModel } from "@/models";
import { enagApi } from "@/apis";

export default function InternCourse() {

  const [courses, setCourses] = useState<InternCourseModel[]>([])

  useEffect(() => {
    getData()
  }, [])
  
  const getData=async()=>{
    const {data}=await enagApi.get<InternCourseModel[]>(`/intern_course`)
    setCourses(data)
  }

  return (
    <Layout>
      <TableInternCourse intern_courses={courses} />
    </Layout>
  );
}
