import React, { useEffect, useState } from "react";
import { TableACourse } from "../../../components/admin/course/TableACourse";
import { CourseModel } from "@/models";
import { enagApi } from "@/apis";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

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
    <>
      <Typography component="p" fontSize={22} fontWeight={700}> Cursos </Typography>
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
    </>
  );
}
