import { Layout } from "@/components/layouts";
import { Container, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { GridTModule } from "../../components/teacher/GridTModule";
import { TeacherContext } from "@/context/teacher";
import { InternCourseModel, ModuleModel, TeacherModel } from "@/models";
import { enagApi } from "@/apis";
import { GridInternCourse } from "@/components/teacher/Intern/GridInternCourse";

export default function Teacher() {
  const [modules, setModules] = useState<ModuleModel[]>([]);
  const [interns, setInterns] = useState<InternCourseModel[]>([])
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data: p } = await enagApi.get(`/auth/profile`);
    const { data: t } = await enagApi.get<TeacherModel>(
      `/teachers/user_id=${p.user_id}`
    );
    const { data } = await enagApi.get<ModuleModel[]>(
      `/modules/teacher_id=${t.id}`
    );
    setModules(data);
    const {data:intrs}=await enagApi.get<InternCourseModel[]>(`/intern_course/teacher_id=${t.id}`)
    setInterns(intrs)
  };

  return (
    <Layout>
      <Container className="container">
        <Typography variant="h4" className="mb-3">
          {" "}
          Cursos de pasantías{" "}
        </Typography>
        <GridInternCourse courses={interns} />
        <Typography variant="h4" className="mb-3">
          {" "}
          Módulos académicos{" "}
        </Typography>
        <GridTModule modules={modules} />
      </Container>
    </Layout>
  );
}
