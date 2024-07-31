import { Layout } from "@/components/layouts";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Container } from "@mui/material";
import Image from "next/image";

import { ListCourse } from "@/components/my/ListCourse";
import {
  CourseModel,
  InscriptionModel,
  InternCourseModel,
  InternInscriptionModel,
  StudentModel,
} from "@/models";
import { enagApi } from "@/apis";
import { ListCourseIntern } from "@/components/my/intern/ListCourseIntern";

export default function My() {
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [coursesIntern, setCoursesIntern] = useState<InternCourseModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data: p } = await enagApi.get(`/auth/profile`);
      const { data: s } = await enagApi.get<StudentModel>(
        `/students/user_id=${p.user_id}`
      );
      const { data: ins } = await enagApi.get<InscriptionModel[]>(
        `/inscriptions/student_id=${s.id}`
      );
      const { data: inter_ins } = await enagApi.get<InternInscriptionModel[]>(
        `/intern_inscription/student_id=${s.id}`
      );
      const course_ids = inter_ins.map((intern) => {
        return intern.course_id;
      });
      const { data: cour_intern } = await enagApi.post<InternCourseModel[]>(
        `/intern_course/course_ids`,
        { course_ids }
      );
      setCoursesIntern(cour_intern);
      let coursesPromises: any[] = [];
      ins.map(async (insc) => {
        coursesPromises.push(
          enagApi.get<CourseModel>(`/courses/course_id=${insc.course_id}`)
        );
      });

      const cs = await Promise.all(coursesPromises);
      let allCourses: CourseModel[] = [];
      cs.map((data) => {
        if (data.data.is_start) {
          allCourses = [...allCourses, data.data];
        }
      });
      setCourses(allCourses);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Layout title="Mi espacio personal">
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
        >
          <CircularProgress size={100} color="error" />
        </Box>
      ) : (
        <>
          <ListCourseIntern courses={coursesIntern} />
          <ListCourse courses={courses} />
        </>
      )}
    </Layout>
  );
}
