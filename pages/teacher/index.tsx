import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { InternCourseModel, ModuleModel, TeacherModel } from "@/models";
import { enagApi } from "@/apis";
import { useRouter } from "next/router";

export default function Teacher() {
  const [modules, setModules] = useState<ModuleModel[]>([]);
  const [interns, setInterns] = useState<InternCourseModel[]>([]);
  const [filteredModules, setFilteredModules] = useState<ModuleModel[]>([]);
  const [filteredInterns, setFilteredInterns] = useState<InternCourseModel[]>(
    []
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Hook para obtener el tema y media query
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Filtrar módulos e internos según la búsqueda
    if (searchQuery) {
      setFilteredModules(
        modules.filter((module) =>
          module.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredInterns(
        interns.filter((intern) =>
          intern.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredModules(modules);
      setFilteredInterns(interns);
    }
  }, [searchQuery, modules, interns]);

  const getData = async () => {
    try {
      const { data: p } = await enagApi.get(`/auth/profile`);
      console.log(p.user_id);
      
      const { data: t } = await enagApi.get<TeacherModel>(
        `/teachers/user_id=${p.user_id}`
      );
      const { data } = await enagApi.get<ModuleModel[]>(
        `/modules/teacher_id=${t.id}`
      );
      setModules(data);
      const { data: intrs } = await enagApi.get<InternCourseModel[]>(
        `/intern_course/teacher_id=${t.id}`
      );
      setInterns(intrs);
      setIsLoading(false);
    } catch (error) {
      // Manejo de errores
      setIsLoading(false);
    }
  };

  const goToInternCourseById = (id: number) => {
    router.push(`/teacher/intern/${id}`);
  };

  const goToModul = (id: number) => {
    router.push(`/teacher/module/${id}`);
  };

  return (
    <Container className="container">
      <Typography component="p" fontWeight="700" fontSize={22} mb={2}>
        Bienvenido
      </Typography>
      {/* Campo de búsqueda */}
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Buscar módulos o pasantías..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          mb: 2,
          maxWidth: isLargeScreen ? "400px" : "100%",
          width: isLargeScreen ? "400px" : "100%",
        }}
      />

      <Typography component="p" fontWeight="700" fontSize={22} mb={2}>
        Tus pasantías
      </Typography>
      {filteredInterns.length === 0 ? (
        <Typography variant="h6" color="textSecondary">
          No tienes ninguna pasantía.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredInterns.map((intern) => (
            <Grid key={intern.id} item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  maxWidth: { xs: "100%", sm: 400 },
                  maxHeight: { xs: "auto", sm: 300 },
                  margin: "auto",
                }}
              >
                <CardActionArea onClick={() => goToInternCourseById(intern.id)}>
                  <CardMedia
                    component="img"
                    image={intern.img_url}
                    alt="Module image"
                    sx={{
                      height: { xs: 150, sm: 150 },
                      objectFit: "cover",
                    }}
                  />
                  <CardContent sx={{ backgroundColor: "rgba(0,0,0,255)" }}>
                    <Typography gutterBottom component="p" color="white">
                      {intern.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Typography component="p" fontWeight="700" fontSize={22} mb={2}>
        Tus módulos
      </Typography>
      {filteredModules.length === 0 ? (
        <Typography variant="h6" color="textSecondary">No tienes ningún módulo</Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredModules.map((modulo) => (
            <Grid key={modulo.id} item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  maxWidth: { xs: "100%", sm: 400 },
                  maxHeight: { xs: "auto", sm: 300 },
                  margin: "auto",
                }}
              >
                <CardActionArea onClick={() => goToModul(modulo.id)}>
                  <CardMedia
                    component="img"
                    image={modulo.img_url}
                    alt="Module image"
                    sx={{
                      height: { xs: 150, sm: 150 },
                      objectFit: "cover",
                    }}
                  />
                  <CardContent sx={{ backgroundColor: "rgba(255,0,0,0.8)" }}>
                    <Typography gutterBottom component="p" color="white">
                      {modulo.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
