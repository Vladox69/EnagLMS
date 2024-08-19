import { enagApi } from "@/apis";
import { Navbar, Footer } from "@/components/ui";
import { CourseModel } from "@/models";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Cursos() {
  const router = useRouter();

  useEffect(() => {
    getData();
  }, []);

  const [shortCourses, setShortCourses] = useState<CourseModel[]>([]);
  const [largeCourses, setLargeCourses] = useState<CourseModel[]>([]);
  const [masterClass, setMasterClass] = useState<CourseModel[]>([]);

  const onClickPersonalizada = () => {
    router.push(`/cursos/personalizado`);
  };

  const goToCourse = (id: number) => {
    router.push(`/cursos/curso/${id}`);
  };

  const getData = async () => {
    const { data } = await enagApi.get<CourseModel[]>(`/courses`);
    setShortCourses(data)
    // const sc = data.filter((d) => d.type == "short");
    // const lc = data.filter((d) => d.type == "large");
    // const mc = data.filter((d) => d.type == "master class");

    // setShortCourses(sc);
    // setLargeCourses(lc);
    // setMasterClass(mc);
  };

  return (
    <>
      <Box>
        <Navbar />
      </Box>

      <Container
        className="d-flex flex-column justify-content-center align-items-center text-center "
        style={{
          // backgroundImage:`url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
        }}
      >
        <Typography component="p"  fontSize={22} fontWeight={700}>CURSOS</Typography>
        <Container className="d-flex justify-content-center">
          <Typography
            component="p"
            width={1500}
            sx={{
              textAlign: "justify",
            }}
          >
            En ENAG, cada curso es una aventura culinaria que espera ser
            descubierta. Nuestros cursos están meticulosamente diseñados para
            adaptarse a una variedad de habilidades y aspiraciones, desde
            principiantes apasionados hasta profesionales que buscan
            perfeccionar su arte. Al sumergirse en nuestros programas, los
            estudiantes explorarán la riqueza de la cocina tradicional y
            contemporánea, aprenderán técnicas de vanguardia y obtendrán
            conocimientos esenciales sobre la industria gastronómica. Con
            instalaciones de última generación y maestros reconocidos, ENAG es
            el lugar donde su amor por la cocina se elevará a nuevas alturas.
            Descubre el curso que encenderá tu creatividad y te impulsará hacia
            tu futuro culinario.
          </Typography>
        </Container>

        <Container className="my-2">

          {shortCourses.length == 0 ? (
            <Typography variant="h4" className="text-center mb-2">
              Aún no existen cursos para esta sección
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {shortCourses.map((cc) => (
                <Grid key={cc.id} item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardMedia
                      component="img"
                      alt="curso.png"
                      image={cc.img_url}
                      height={200}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {cc.topic}
                      </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        size="small"
                        color="error"
                        onClick={() => goToCourse(cc.id)}
                      >
                        Más información
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Container>

      <Footer />
    </>
  );
}
