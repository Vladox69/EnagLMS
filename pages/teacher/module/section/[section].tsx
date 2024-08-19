import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  Box,
} from "@mui/material";
import { NextPage } from "next";
import { ActivityModel, SectionModel, SectionResourceModel } from "@/models";
import { enagApi } from "@/apis";
import { GridTActivity } from "@/components/teacher/Activity/GridTActivity";
import { GridTResource } from "@/components/teacher/Sections/Resource/GridTResource";
import { useRouter } from "next/router";
import { FormTResource } from "../../../../components/teacher/Sections/Resource/FormTResource";
import Swal from "sweetalert2";

interface Props {
  section: SectionModel;
  activities: ActivityModel[];
  resources: SectionResourceModel[];
}

export const TeacherSectionById: NextPage<Props> = ({}) => {
  const router = useRouter();

  const [section, setSection] = useState<SectionModel>();
  const [activities, setActivities] = useState<ActivityModel[]>([]);
  const [resources, setResources] = useState<SectionResourceModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (router.isReady) {
      setIsLoading(true);
      getData();
    }
  }, [router.isReady]);

  const getData = async () => {
    try {
      const { section: id } = router.query;
      const { data: sect } = await enagApi.get<SectionModel>(
        `/sections/section_id=${id}`
      );
      setSection(sect);
      const { data: acts } = await enagApi.get<ActivityModel[]>(
        `/activities/section_id=${id}`
      );
      setActivities(acts);
      const { data: rescs } = await enagApi.get<SectionResourceModel[]>(
        `/sections/resources/section_id=${id}`
      );
      setResources(rescs);
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos porblemas al cargar los datos",
      });
      setIsLoading(false);
    }
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (formData: any) => {
    if (formData.status == 200) {
      //TODO: Rehidratación de la página añadir a la lista el nuevo recurso
      handleClose();
    } else {
    }
  };

  const goToNewActivity = () => {
    const { section: id } = router.query;
    router.push({
      pathname: "/teacher/module/section/activity/new",
      query: { section_id: id },
    });
  };

  return (
    <>
      <Container className="container">
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
            <Typography component="p" fontWeight={700} fontSize={24}>
              {" "}
              {section?.title}{" "}
            </Typography>
            <Typography
              component="p"
              dangerouslySetInnerHTML={{
                __html: section?.content || "",
              }}
            />

            <Typography component="p" fontSize={20} fontWeight={700}>
              {" "}
              Recursos{" "}
            </Typography>
            {resources.length == 0 ? (
              <Typography variant="h6" color="textSecondary">
                No existen recursos
              </Typography>
            ) : (
              <GridTResource section_resources={resources} />
            )}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title" component="p" fontSize={20} fontWeight={700} className="text-center">
                nuevo recurso
              </DialogTitle>
              <DialogContent>
                <FormTResource
                  section_id={section?.id}
                  onSubmitResource={handleFormSubmit}
                  onCancel={handleClose}
                />
              </DialogContent>
            </Dialog>
            <Button
              variant="contained"
              color="error"
              className="my-2"
              onClick={handleOpen}
            >
              Nuevo recurso
            </Button>

            <Typography component="p" fontSize={20} fontWeight={700}>
              {" "}
              Actividades{" "}
            </Typography>
            {activities.length == 0 ? (
              <Typography component="p" color="textSecondary">
                No existen actividades
              </Typography>
            ) : (
              <GridTActivity activities={activities} />
            )}
            <Button
              variant="contained"
              color="error"
              className="my-2"
              onClick={goToNewActivity}
            >
              Nueva actividad
            </Button>
          </Container>
        )}
      </Container>
    </>
  );
};

export default TeacherSectionById;
