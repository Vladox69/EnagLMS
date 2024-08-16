import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  CourseModel,
  InscriptionModel,
  InternCourseModel,
  InternInscriptionModel,
  StudentModel,
} from "@/models";
import { enagApi } from "@/apis";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

export default function My() {
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [coursesIntern, setCoursesIntern] = useState<InternCourseModel[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCourses, setFilteredCourses] = useState<CourseModel[]>([]);
  const [filteredCoursesIntern, setFilteredCoursesIntern] = useState<
    InternCourseModel[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Filtrar los cursos e inscripciones cuando cambia el término de búsqueda
    filterData();
  }, [searchTerm, courses, coursesIntern]);

  const router = useRouter();

  const goToInternCourseById = (id: number) => {
    router.push(`/my/intern/${id}`);
  };

  const goToCourse = (id: number) => {
    router.push(`/my/course/${id}`);
  };

  const getData = async () => {
    setIsLoading(true);
    try {
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

      const course_ids = inter_ins.map((intern) => intern.course_id);
      const { data: cour_intern } = await enagApi.post<InternCourseModel[]>(
        `/intern_course/course_ids`,
        { course_ids }
      );
      setCoursesIntern(cour_intern);

      let coursesPromises: any[] = [];
      ins.forEach((insc) => {
        coursesPromises.push(
          enagApi.get<CourseModel>(`/courses/course_id=${insc.course_id}`)
        );
      });

      const cs = await Promise.all(coursesPromises);
      let allCourses: CourseModel[] = [];
      cs.forEach((data) => {
        if (data.data.is_start) {
          allCourses = [...allCourses, data.data];
        }
      });
      setCourses(allCourses);
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos problemas al cargar los datos",
      });
      setIsLoading(false);
    }
  };

  const filterData = () => {
    // Filtrar cursos e inscripciones según el término de búsqueda
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredCoursesIntern = coursesIntern.filter((course) =>
      course.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
    const filteredCourses = courses.filter((course) =>
      course.topic.toLowerCase().includes(lowerCaseSearchTerm)
    );

    setFilteredCoursesIntern(filteredCoursesIntern);
    setFilteredCourses(filteredCourses);
  };

  const handleSearch = () => {
    filterData();
  };

  return (
    < >
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
        <Container>
          <Box display="flex" alignItems="center" mb={3}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ mr: 1, flexGrow: 1, maxWidth: 300 }}
            />
            <IconButton color="primary" onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </Box>

          <Typography component="p" fontWeight="700" mb={2}>
            Tus pasantías
          </Typography>

          {filteredCoursesIntern.length === 0 ? (
            <Typography variant="h6" color="textSecondary">
              No tienes ninguna inscripción de pasantía.
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {filteredCoursesIntern.map((course) => (
                <Grid key={course.id} item xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: { xs: "100%", sm: 400 },
                      maxHeight: { xs: "auto", sm: 300 },
                      margin: "auto",
                    }}
                  >
                    <CardActionArea
                      onClick={() => goToInternCourseById(course.id)}
                    >
                      <CardMedia
                        component="img"
                        image={course.img_url}
                        alt="Module image"
                        sx={{
                          height: { xs: 150, sm: 150 },
                          objectFit: "cover",
                        }}
                      />
                      <CardContent sx={{ backgroundColor: "rgba(0,0,0,255)" }}>
                        <Typography gutterBottom component="p" color="white">
                          {course.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
          <Typography component="p" fontWeight="700" mt={4} mb={2}>
            Tus Cursos
          </Typography>

          {filteredCourses.length === 0 ? (
            <Typography variant="h6" color="textSecondary">
              No tienes ninguna inscripción de curso.
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {filteredCourses.map((course) => (
                <Grid key={course.id} item xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: { xs: "100%", sm: 400 },
                      maxHeight: { xs: "auto", sm: 300 },
                      margin: "auto",
                    }}
                  >
                    <CardActionArea onClick={() => goToCourse(course.id)}>
                      <CardMedia
                        component="img"
                        image={course.img_url}
                        alt="Module image"
                        sx={{
                          height: { xs: 150, sm: 150 },
                          objectFit: "cover",
                        }}
                      />
                      <CardContent
                        sx={{ backgroundColor: "rgba(255,0,0,0.8)" }}
                      >
                        <Typography gutterBottom component="p" color="white">
                          {course.topic}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      )}
    </>
  );
}
