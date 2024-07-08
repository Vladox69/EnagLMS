import { Layout } from "@/components/layouts";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import {
  StudentModel,
  SubmissionModel,
  SubmissionResourceModel,
} from "@/models";
import { NextPage } from "next";
import { enagApi } from "@/apis";
import { FormSubmission } from "@/components/teacher/Activity/Submission/FormSubmission";
import { useRouter } from "next/router";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { handleDownload } from "@/utils/file/handleDownload";
import { ItemTSubmissionResource } from "@/components/teacher/Activity/Submission/ItemTSubmissionResource";

interface Props {
  submission: SubmissionModel;
  student: StudentModel;
  resource: SubmissionResourceModel;
}

export const TeacherSubmissionById: NextPage<Props> = ({}) => {
  const router = useRouter();
  const [submission, setSubmission] = useState<SubmissionModel>();
  const [student, setStudent] = useState<StudentModel>();
  const [resources, setResources] = useState<SubmissionResourceModel[]>([]);

  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const getData = async () => {
    const { submission: id } = router.query;
    const { data: sbm } = await enagApi.get<SubmissionModel>(
      `/submissions/submission_id=${id}`
    );
    const { data: st } = await enagApi.get<StudentModel>(
      `/students/student_id=${sbm.student_id}`
    );
    const { data: rsc } = await enagApi.get<SubmissionResourceModel[]>(
      `/submissions/resources/submission_id=${sbm.id}`
    );
    setSubmission(sbm);
    setStudent(st);
    setResources(rsc);
  };

  return (
    <Layout title="Submission">
      <Container className="container ">
        {submission == undefined ? (
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
                <Typography variant="h4" className="mb-1">
                  {" "}
                  Formulario de revisión de tareas{" "}
                </Typography>
                <Typography variant="h5" className="mb-1">
                  {" "}
                  Estado de la entrega{" "}
                </Typography>
                {submission.state_gra ? (
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
                {submission.state_sub ? (
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
                  <ItemTSubmissionResource key={resource.id} resource={resource} />
                ))}
              </Container>
              <FormSubmission submission={submission!} />
            </Container>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default TeacherSubmissionById;
