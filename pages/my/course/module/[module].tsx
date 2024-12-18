import { NextPage } from "next";
import {
  Container,
  Typography,
  Divider,
  Box,
  CircularProgress,
} from "@mui/material";
import { GridSection } from "@/components/my/section/";
import ArticleIcon from "@mui/icons-material/Article";
import { useRouter } from "next/router";
import { enagApi } from "@/apis";
import {
  ModuleModel,
  ModuleResourceModel,
  SectionModel,
  StudentModel,
  TeacherModel,
} from "@/models";
import { useEffect, useState } from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { CustomDialog } from "@/components/my/CustomDialog";
import styles from "@/styles/Custom.module.css";
import Swal from "sweetalert2";

interface Props {
  module: string;
  sections: SectionModel[];
  teacher: TeacherModel;
  resources: ModuleResourceModel[];
}

export const MyModuleByName: NextPage<Props> = ({}) => {
  const router = useRouter();

  const [openPlanificacion, setPlanificacion] = useState(false);
  const [openDocente, setDocente] = useState(false);
  const { module: id } = router.query;
  const [module, setModule] = useState<ModuleModel>();
  const [sections, setSections] = useState<SectionModel[]>([]);
  const [resources, setResources] = useState<ModuleResourceModel>();
  const [teacher, setTeacher] = useState<TeacherModel>();
  const [student, setStudent] = useState<StudentModel>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    setIsLoading(true);
    try {
      if (id) {
        const { data: p } = await enagApi.get(`/auth/profile`);
        const { data: s } = await enagApi.get<StudentModel>(
          `/students/user_id=${p.user_id}`
        );
        setStudent(s);
        const { data: md } = await enagApi.get<ModuleModel>(
          `/modules/module_id=${id}`
        );
        setModule(md);
        const { data: secs } = await enagApi.get<SectionModel[]>(
          `/sections/module_id=${id}`
        );
        setSections(secs);
        const { data: rscs } = await enagApi.get<ModuleResourceModel[]>(
          `/modules/resources/module_id=${id}`
        );
        const { data: tch } = await enagApi.get<TeacherModel>(
          `/teachers/teacher_id=${md.teacher_id}`
        );
        setTeacher(tch);
        if (rscs.length != 0) {
          setResources(rscs[0]);
        }
        setIsLoading(false);
      }
    } catch (error) {
      // Swal.fire({
      //   icon: "info",
      //   title: "Tenemos porblemas al cargar los datos",
      // });
      setIsLoading(false);
    }
  };

  const handleOpenPlanificacion = () => {
    setPlanificacion(true);
  };

  const handleClosePlanificacion = () => {
    setPlanificacion(false);
  };

  const handleOpenDocente = () => {
    setDocente(true);
  };

  const handleCloseDocente = () => {
    setDocente(false);
  };

  const goToAsistance = () => {
    router.push(
      `/my/course/module/asistance/student_id=${student?.id}&module_id=${module?.id}`
    );
  };

  const goToGrades = () => {
    router.push(
      `/my/course/module/grade/student_id=${student?.id}&module_id=${module?.id}`
    );
  };
  const css = " container d-flex border rounded align-items-center mb-2";
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
          <Typography component="p" fontWeight={700} fontSize={26}>
            {module?.title}
          </Typography>
          <Typography
            component="p"
            dangerouslySetInnerHTML={{
              __html: module?.content ?? "",
            }}
          />
          <Container
            className={styles.hover_effect + css}
            component="div"
            onClick={handleOpenDocente}
          >
            <ArticleIcon
              sx={{
                width: 50,
                height: 50,
              }}
            />
            <Typography component="p" className="">
              {" "}
              Hoja de vida del Docente{" "}
            </Typography>
          </Container>
          <CustomDialog
            open={openDocente}
            handleClose={handleCloseDocente}
            title="Hoja de vida del docente"
            url={teacher?.cv_url || ""}
          />

          <Divider />
          <Container
            className={styles.hover_effect + css}
            component="div"
            onClick={handleOpenPlanificacion}
          >
            <ArticleIcon
              sx={{
                width: 50,
                height: 50,
              }}
            />
            <Typography component="p">
              Planificación académica de la materia{" "}
            </Typography>
          </Container>
          <CustomDialog
            open={openPlanificacion}
            handleClose={handleClosePlanificacion}
            title="Planificación de la materia"
            url={resources?.url_resource || ""}
          />
          <Divider />

          <Typography component="p" fontSize={20} fontWeight={700}>
            Asistencias
          </Typography>

          <Container
            className={styles.hover_effect + css}
            component="div"
            onClick={goToAsistance}
          >
            <ArticleIcon
              sx={{
                width: 50,
                height: 50,
              }}
            />
            <Typography component="p">Asistencias </Typography>
          </Container>

          <Typography component="p" fontSize={20} fontWeight={700}>
            Calificaciones
          </Typography>

          <Container
            className={styles.hover_effect + css}
            component="div"
            onClick={goToGrades}
          >
            <ViewListIcon
              sx={{
                width: 50,
                height: 50,
              }}
            />
            <Typography component="p">Calificaciones </Typography>
          </Container>
          <Typography component="p" fontSize={20} fontWeight={700}>
            Secciones
          </Typography>
          {sections.length == 0 ? (
            <Typography component="p" color="textSecondary">
              No existen secciones
            </Typography>
          ) : (
            <GridSection sections={sections} />
          )}
        </Container>
      )}
    </>
  );
};

export default MyModuleByName;
