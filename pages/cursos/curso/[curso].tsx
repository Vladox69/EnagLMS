import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "../../../components/ui";
import { Container, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./curso.module.css";
import { enagApi } from "@/apis";
import { useRouter } from "next/router";
import { CourseModel, ModuleModel } from "@/models";

interface Props {
  curso: string;
}

export const CursoByName: NextPage<Props> = () => {
  const router = useRouter();
  const [course, setCourse] = useState<CourseModel>();
  const [modules, setModules] = useState<ModuleModel[]>([]);

  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const getData = async () => {
    try {
      const { curso } = router.query;
      const { data: c } = await enagApi.get<CourseModel>(
        `/courses/course_id=${curso}`
      );
      setCourse(c);
      const { data: mm } = await enagApi.get(`/modules/course_id=${c.id}`);
      setModules(mm);
    } catch (error) {
      
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: "url('/assets/fondo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
          position: "relative",
        }}
      >
        
      </div>
      <Container className="mt-5">
      <Typography fontSize={24} fontWeight={700}>
        {course?.topic}
      </Typography>
        <Typography
          dangerouslySetInnerHTML={{
            __html: course?.content || "",
          }}
        ></Typography>
        <p>
          <AccessTimeIcon /> {course?.periods} Periodos / Duración
        </p>
        <Typography fontSize={20} fontWeight={700}> Objetivo general </Typography>
        <p> {course?.objective} </p>
        <Typography fontSize={20} fontWeight={700}> Mecanismo de titulación </Typography>
        <p> {course?.qualification} </p>
        <Typography fontSize={20} fontWeight={700}> Modalidad </Typography>
        <p> {course?.modality} </p>
        <Typography fontSize={20} fontWeight={700}> Programa </Typography>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Módulo</th>
              <th scope="col" className="text-end">
                Horas
              </th>
            </tr>
          </thead>
          <tbody>
            {modules.map((mod) => (
              <tr key={mod.id}>
                <td> {mod.title} </td>
                <td className="text-end">{mod.teacher_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Typography fontSize={20} fontWeight={700}> Requisitos </Typography>
        <Typography
          component="div"
          dangerouslySetInnerHTML={{
            __html: course?.requirements || "",
          }}
        ></Typography>
      </Container>
      <Footer />
    </>
  );
};

export default CursoByName;
