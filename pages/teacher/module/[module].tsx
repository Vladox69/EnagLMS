import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { enagApi } from "@/apis";
import {
  ModuleModel,
  ModuleResourceModel,
  SectionModel,
  TeacherModel,
} from "@/models";
import ArticleIcon from "@mui/icons-material/Article";
import { useRouter } from "next/router";
import { GridTSection } from "../../../components/teacher/Sections/GridTSection";
import styles from "@/styles/Custom.module.css";
import { CustomDialog } from "@/components/my/CustomDialog";
import EditIcon from "@mui/icons-material/Edit";
import { FormPlanificacionModule } from "@/components/teacher/Module/FormPlanificacionModule";
import Swal from "sweetalert2";

interface Props {
  sections: SectionModel[];
}

export const TeacherModuleById: NextPage<Props> = ({}) => {
  const router = useRouter();
  const { module: id } = router.query;

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const [openPlanificacion, setPlanificacion] = useState(false);
  const [openDocente, setDocente] = useState(false);
  const [sections, setSections] = useState<SectionModel[]>([]);
  const [module, setModule] = useState<ModuleModel>();
  const [teacher, setTeacher] = useState<TeacherModel>();
  const [resources, setResources] = useState<ModuleResourceModel>();
  const [openPlanificacionForm, setOpenPlanificacionForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    try {
      const { module } = router.query;
      const { data: p } = await enagApi.get(`/auth/profile`);
      const { data: mr } = await enagApi.get<ModuleResourceModel[]>(
        `/modules/resources/module_id=${module}`
      );
      if (mr.length != 0) {
        setResources(mr[0]);
      }
      const { data: t } = await enagApi.get<TeacherModel>(
        `/teachers/user_id=${p.user_id}`
      );
      setTeacher(t);
      const { data: m } = await enagApi.get<ModuleModel>(
        `/modules/module_id=${module}`
      );
      setModule(m);
      const { data: s } = await enagApi.get<SectionModel[]>(
        `/sections/module_id=${module}`
      );
      setSections(s);
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos porblemas al cargar los datos",
      });
      setIsLoading(false);
    }
  };

  const handleClosePlanificacionForm = () => {
    setOpenPlanificacionForm(false);
  };

  const handleOpenPlanificacionForm = () => {
    setOpenPlanificacionForm(true);
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
    const { module } = router.query;
    router.push(`/teacher/module/asistance/${module}`);
  };

  const goToNewSection = () => {
    const { module } = router.query;
    router.push({
      pathname: "/teacher/module/section/new",
      query: { module_id: module },
    });
  };

  const goToStudents = () => {
    const { module } = router.query;
    router.push(`/teacher/module/students/${module}`);
  };

  const goToEditModule = () => {
    const { module } = router.query;
    router.push({
      pathname: "/teacher/module/edit",
      query: { id: module },
    });
  };
  const handleFormSubmitPlanificacion = async (formData: any) => {
    if (formData.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Datos guardados",
      });
      getData();
      handleClosePlanificacionForm();
    } else {
      getData();
      Swal.fire({
        icon: "error",
        title: "No se pudo guardar los datos",
      });
    }
  };

  return (
    <>
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
        <Container className="container ">
          <Typography
            component="p"
            fontWeight={700}
            fontSize={24}
            className="my-2"
          >
            {" "}
            {module?.title}{" "}
          </Typography>
          <Typography
            component="p"
            dangerouslySetInnerHTML={{
              __html: module?.content || "",
            }}
          />
          <Button
            variant="contained"
            color="error"
            className="mb-2"
            onClick={goToEditModule}
          >
            Editar módulo
          </Button>
          <Container
            className={
              styles.hover_effect +
              " container border rounded d-flex mb-2 align-items-center"
            }
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

          <Container
            className={
              styles.hover_effect +
              " container border rounded d-flex mb-2 justify-content-between"
            }
            component="div"
          >
            <div
              className="d-flex align-items-center"
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
            </div>
            <div className="d-flex align-items-center">
              <IconButton onClick={handleOpenPlanificacionForm}>
                <EditIcon />
              </IconButton>
            </div>
          </Container>
          <Dialog
            open={openPlanificacionForm}
            onClose={handleClosePlanificacionForm}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Agregar planificación
            </DialogTitle>
            <DialogContent>
              <FormPlanificacionModule
                module_id={module?.id || 0}
                onCancel={handleClosePlanificacionForm}
                onSubmitResource={handleFormSubmitPlanificacion}
              />
            </DialogContent>
          </Dialog>
          <CustomDialog
            open={openPlanificacion}
            handleClose={handleClosePlanificacion}
            title="Planificación de la materia"
            url={resources?.url_resource || ""}
          />

          <Typography component="p" fontWeight={700} fontSize={20}>
            Asistencias
          </Typography>

          <Container
            className={
              styles.hover_effect +
              " container border rounded d-flex mb-2 align-items-center"
            }
            component="div"
            onClick={goToAsistance}
          >
            <ArticleIcon
              sx={{
                width: 50,
                height: 50,
              }}
            />
            <Typography component="p">Asistencia</Typography>
          </Container>

          <Typography component="p" fontWeight={700} fontSize={20}>
            Calificaciones
          </Typography>

          <Container
            className={
              styles.hover_effect +
              " container border rounded d-flex mb-2 align-items-center"
            }
            component="div"
            onClick={goToStudents}
          >
            <ArticleIcon
              sx={{
                width: 50,
                height: 50,
              }}
            />
            <Typography component="p">Calificaciones</Typography>
          </Container>

          <Button
            variant="contained"
            color="error"
            className="mb-2"
            onClick={goToNewSection}
          >
            Crear nueva sección
          </Button>
          <Typography component="p" fontWeight={700} fontSize={20}>
            Secciones
          </Typography>
          <GridTSection sections={sections} />
        </Container>
      )}
    </>
  );
};

export default TeacherModuleById;
