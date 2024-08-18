import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import {
  StudentModel,
  SubmissionModel,
  SubmissionResourceModel,
  UserModel,
} from "@/models";
import { NextPage } from "next";
import { enagApi } from "@/apis";
import { FormSubmission } from "@/components/teacher/Activity/Submission/FormSubmission";
import { useRouter } from "next/router";
import { ItemTSubmissionResource } from "@/components/teacher/Activity/Submission/ItemTSubmissionResource";
import Swal from "sweetalert2";

interface Props {
  submission: SubmissionModel;
  student: StudentModel;
  resource: SubmissionResourceModel;
}

export const TeacherSubmissionById: NextPage<Props> = ({}) => {
  const router = useRouter();
  const [submission, setSubmission] = useState<SubmissionModel>();
  const [student, setStudent] = useState<StudentModel>();
  const [user, setUser] = useState<UserModel>();
  const [resources, setResources] = useState<SubmissionResourceModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const checkDate = (date: string) => {
  try {
    const fechaReferencia = new Date("2000-08-18T00:00:00.000z");
    const fechaObj = new Date(date);
    if (fechaObj.getTime() === fechaReferencia.getTime()) {
      return "Sin entrega";
    } else {
      const fechaFormateada = fechaObj.toISOString().slice(0, 10);
      return "Fecha de entrega: " + fechaFormateada;
    }
  } catch (error) {
    return "Sin entrega";
  }
  };
  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { submission: id } = router.query;
      const { data: sbm } = await enagApi.get<SubmissionModel>(
        `/submissions/submission_id=${id}`
      );
      setSubmission(sbm);
      const { data: st } = await enagApi.get<StudentModel>(
        `/students/student_id=${sbm.student_id}`
      );
      setStudent(st);
      const { data: usr } = await enagApi.get<UserModel>(
        `/users/user_id=${st.user_id}`
      );
      setUser(usr);
      const { data: rsc } = await enagApi.get<SubmissionResourceModel[]>(
        `/submissions/resources/submission_id=${sbm.id}`
      );
      setResources(rsc);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container className="container ">
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
          <>
            <Container className="container ">
              <Container className="w-75">
                <Typography
                  component="p"
                  fontSize={20}
                  fontWeight={700}
                  className="mb-1"
                >
                  {" "}
                  Formulario de revisión de tareas{" "}
                </Typography>
                <Typography
                  component="p"
                  className="mb-1"
                >
                  {" "}
                  Actividad de {user?.names} {user?.last_names}
                </Typography>
                <Typography component="p"
                  className="mb-1">
                  {checkDate(submission?.date.toString() || "")}
                </Typography>
                <Typography component="p" className="mb-1">
                  {" "}
                  Estado de la actividad{" "}
                </Typography>
                {submission?.state_gra ? (
                  <Typography
                    component="p"
                    className={
                      "bg-success w-25 text-center mb-2 border rounded text-light"
                    }
                  >
                    {" "}
                    {submission!.state_gra}{" "}
                  </Typography>
                ) : (
                  <Typography
                    component="p"
                    className={
                      "bg-danger w-25 text-center mb-2 border rounded text-light"
                    }
                  >
                    No entregado
                  </Typography>
                )}
                {submission?.state_sub ? (
                  <Typography
                    component="p"
                    className={
                      "bg-success w-25 text-center mb-2 border rounded text-light"
                    }
                  >
                    {" "}
                    {submission!.state_sub}
                  </Typography>
                ) : (
                  <></>
                )}
                {resources.map((resource) => (
                  <ItemTSubmissionResource
                    key={resource.id}
                    resource={resource}
                  />
                ))}
              </Container>
              <FormSubmission submission={submission!} />
            </Container>
          </>
        )}
      </Container>
    </>
  );
};

export default TeacherSubmissionById;
