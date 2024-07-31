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
    const sc = data.filter((d) => d.type == "short");
    const lc = data.filter((d) => d.type == "large");
    const mc = data.filter((d) => d.type == "master class");

    setShortCourses(sc);
    setLargeCourses(lc);
    setMasterClass(mc);
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
        <Typography variant="h3">CURSOS</Typography>
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

        <Container>
          <Typography variant="h4" className="text-center mb-2">
            Cursos cortos
          </Typography>
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
                      {/* <Typography
                        component="p"
                        color="text.secondary"
                        sx={{
                          textAlign: "justify",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: cc.content,
                        }}
                      /> */}
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

        <Container>
          <Typography variant="h4" className="text-center mb-2">
            Cursos largos
          </Typography>
          {largeCourses.length == 0 ? (
            <Typography variant="h4" className="text-center mb-2">
              Aún no existen cursos para esta sección
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {largeCourses.map((cl) => (
                <Grid key={cl.id} item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardMedia
                      component="img"
                      alt="curso.png"
                      image={cl.img_url}
                      height={200}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {cl.topic}
                      </Typography>
                      {/* <Typography
                        component="p"
                        color="text.secondary"
                        sx={{
                          textAlign: "justify",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: cl.content,
                        }}
                      /> */}
                    </CardContent>
                    <CardActions style={{ justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        size="small"
                        color="error"
                        onClick={() => goToCourse(cl.id)}
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

        <Container>
          <Typography variant="h4" className="text-center mb-2">
            Master clases
          </Typography>
          {masterClass.length == 0 ? (
            <Typography variant="h4" className="text-center mb-2">
              Aún no existen cursos para esta sección
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {masterClass.map((mc) => (
                <Grid key={mc.id} item xs={12} md={4}>
                  <Card variant="outlined">
                    <CardMedia
                      component="img"
                      alt="curso.png"
                      image={mc.img_url}
                      height={200}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {mc.topic}
                      </Typography>
                      {/* <Typography variant="body2" color="text.secondary">
                        {mc.content}
                      </Typography> */}
                    </CardContent>
                    <CardActions style={{ justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        size="small"
                        color="error"
                        onClick={() => goToCourse(mc.id)}
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

        <Container>
          <Typography variant="h4" className="text-center">
            Clases personalizadas
          </Typography>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            Descubre una nueva forma de aprender con nuestras clases
            personalizadas, diseñadas para adaptarse a tus necesidades y
            objetivos únicos. Ya sea que estés buscando mejorar tus habilidades
            en un área específica, prepararte para un examen importante o
            explorar un nuevo pasatiempo, nuestras clases están hechas a medida
            para ofrecerte una experiencia de aprendizaje eficiente y agradable.
            Con instructores expertos y un enfoque centrado en el estudiante, te
            ayudamos a alcanzar tus metas a tu propio ritmo. Únete a nosotros y
            transforma tu educación en una experiencia verdaderamente
            personalizada y enriquecedora.
          </p>
          <Button
            variant="contained"
            className="mb-2"
            color="error"
            onClick={onClickPersonalizada}
          >
            Mas información
          </Button>
        </Container>
      </Container>

      <Footer />
    </>
  );
}
