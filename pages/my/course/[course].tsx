import { NextPage } from "next";
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
} from "@mui/material";
import enagApi from "../../../apis/enagApi";
import { CourseModel, ModuleModel } from "@/models";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

interface Props {
  course: string;
  modulos: ModuleModel[];
}

export const MyCourseByName: NextPage<Props> = ({}) => {
  const router = useRouter();
  const [modulos, setModulos] = useState<ModuleModel[]>([]);
  const [filteredModulos, setFilteredModulos] = useState<ModuleModel[]>([]);
  const [course, setCourse] = useState<CourseModel>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { course: id } = router.query;
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  useEffect(() => {
    filterModulos();
  }, [searchTerm, modulos]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { data: c } = await enagApi.get(`/courses/course_id=${id}`);
      setCourse(c);
      const { data: m } = await enagApi.get(`/modules/course_id=${id}`);
      setModulos(m);
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos problemas al cargar los datos",
      });
      setIsLoading(false);
    }
  };

  const filterModulos = () => {
    if (searchTerm) {
      setFilteredModulos(
        modulos.filter((modulo) =>
          modulo.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredModulos(modulos);
    }
  };

  const goToModule=(id:number)=>{
    router.push(`/my/course/module/${id}`)
  }

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
        <Container className="container">
          <Typography component="p" fontWeight="700" fontSize={26}>
            {course?.topic}
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Buscar módulo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2, maxWidth: 300 }}
          />
          {filteredModulos.length === 0 ? (
            <Typography component="p" color="textSecondary">
              No tienes ningún módulo
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {filteredModulos.map((modulo) => (
                <Grid key={modulo.id} item xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: { xs: "100%", sm: 400 },
                      maxHeight: { xs: "auto", sm: 300 },
                      margin: "auto",
                    }}
                  >
                    <CardActionArea onClick={()=>goToModule(modulo.id)} >
                      <CardMedia
                        component="img"
                        image={modulo.img_url}
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
      )}
    </>
  );
};

export default MyCourseByName;
