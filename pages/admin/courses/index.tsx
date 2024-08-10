import { Layout } from "@/components/layouts";
import React, { useEffect, useState } from "react";
import { TableACourse } from "../../../components/admin/course/TableACourse";
import { CourseModel } from "@/models";
import { enagApi } from "@/apis";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { GridColDef } from "@mui/x-data-grid";

export default function Courses() {
  const router = useRouter();
  const [courses, setCourses] = useState<CourseModel[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await enagApi.get<CourseModel[]>(`/courses`);
    setCourses(data);
  };
  const goToNewCourse = () => {
    router.push(`/admin/courses/new`);
  };

  return (
    <Layout>
      <Typography variant="h4"> Tabla de cursos </Typography>
      <TableACourse courses={courses} />
      <Button
        variant="contained"
        onClick={goToNewCourse}
        className="mt-2"
        color="error"
      >
        {" "}
        Nuevo curso{" "}
      </Button>
    </Layout>
  );
}
