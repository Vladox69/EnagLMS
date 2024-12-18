import React, { useState } from "react";
import { Container, Grid, Button, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Face6Icon from "@mui/icons-material/Face6";
import ClassIcon from "@mui/icons-material/Class";
import Person4Icon from "@mui/icons-material/Person4";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ImageIcon from "@mui/icons-material/Image";
import Link from "next/link";
import { enagApi } from "@/apis";
import emailjs from "emailjs-com";
import { CourseModel, InternCourseModel } from "@/models";

export default function Admin() {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [interns, setInterns] = useState<InternCourseModel[]>([]);

  const getData = async () => {
    try {
      const { data: crs } = await enagApi.get<CourseModel[]>(`/courses`);
      setCourses(crs);
      const { data: ints } = await enagApi.get<InternCourseModel[]>(
        `/inter_course`
      );

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container className="container">
        <Grid container spacing={2}>
          <Grid item xs={6} md={3} className="text-center">
            <Button
              sx={{ width: 150, height: 150 }}
              variant="contained"
              color="error"
              className="rounded-circle"
            >
              <Link href={"/admin/users"} className="">
                <PersonIcon
                  sx={{ width: 125, height: 125 }}
                  style={{ color: "white" }}
                />
              </Link>
            </Button>
            <Typography variant="h5" className="fw-bold">
              {" "}
              Usuarios{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="text-center">
            <Button
              sx={{ width: 150, height: 150 }}
              variant="contained"
              color="error"
              className="rounded-circle"
            >
              <Link href={"/admin/teachers"} className="">
                <Person4Icon
                  sx={{ width: 125, height: 125 }}
                  style={{ color: "white" }}
                />
              </Link>
            </Button>
            <Typography variant="h5" className="fw-bold">
              {" "}
              Profesores{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="text-center">
            <Button
              sx={{ width: 150, height: 150 }}
              variant="contained"
              color="error"
              className="rounded-circle"
            >
              <Link href={"/admin/students"}>
                <Face6Icon
                  sx={{ width: 125, height: 125 }}
                  style={{ color: "white" }}
                />
              </Link>
            </Button>
            <Typography variant="h5" className="fw-bold">
              {" "}
              Estudiantes{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="text-center">
            <Button
              sx={{ width: 150, height: 150 }}
              variant="contained"
              color="error"
              className="rounded-circle"
            >
              <Link href={"/admin/courses"}>
                <ClassIcon
                  sx={{ width: 125, height: 125 }}
                  style={{ color: "white" }}
                />
              </Link>
            </Button>
            <Typography variant="h5" className="fw-bold">
              {" "}
              Cursos{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="text-center">
            <Button
              sx={{ width: 150, height: 150 }}
              variant="contained"
              color="error"
              className="rounded-circle"
            >
              <Link href={"/admin/interns"}>
                <AssignmentIcon
                  sx={{ width: 125, height: 125 }}
                  style={{ color: "white" }}
                />
              </Link>
            </Button>
            <Typography variant="h5" className="fw-bold">
              {" "}
              CV{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="text-center">
            <Button
              sx={{ width: 150, height: 150 }}
              variant="contained"
              color="error"
              className="rounded-circle"
            >
              <Link href={"/admin/intern_course"}>
                <AssignmentTurnedInIcon
                  sx={{ width: 125, height: 125 }}
                  style={{ color: "white" }}
                />
              </Link>
            </Button>
            <Typography variant="h5" className="fw-bold">
              {" "}
              Pasantías{" "}
            </Typography>
          </Grid>
          {/*<Grid item xs={6} md={3} className="text-center">
            <Button
              sx={{ width: 150, height: 150 }}
              variant="contained"
              color="error"
              className="rounded-circle"
            >
              <Link href={"/admin/resources"}>
                <ImageIcon
                  sx={{ width: 125, height: 125 }}
                  style={{ color: "white" }}
                />
              </Link>
            </Button>
            <Typography variant="h5" className="fw-bold">
              {" "}
              Recursos{" "}
            </Typography>
          </Grid>
           <Grid item xs={6} md={3} className="text-center">
            <Button
              sx={{ width: 150, height: 150 }}
              variant="contained"
              color="error"
              className="rounded-circle"
            >
              <Link href={"/admin/reports"}>
                <AssessmentIcon
                  sx={{ width: 125, height: 125 }}
                  style={{ color: "white" }}
                />
              </Link>
            </Button>
            <Typography variant="h5" className="fw-bold">
              {" "}
              Reportes{" "}
            </Typography>
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
