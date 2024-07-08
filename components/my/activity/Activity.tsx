import { enagApi } from "@/apis";
import { MyContext } from "@/context/my";
import { SubmissionStudentI } from "@/interface/submission_student";
import {
  ActivityModel,
  ActivityResourceModel,
  StudentModel,
  SubmissionModel,
  SubmissionResourceModel,
} from "@/models";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { GridRActivity } from "./GridRActivity";

interface Props {
  activity: ActivityModel;
}

export const Activity: FC<Props> = ({ activity }) => {
  const router = useRouter();

  const goToSubmissionById = () => {
    router.push(`/my/course/module/activity/submission/${submission?.id}`);
  };

  const comparteDate=()=>{
    const dateToCompare = new Date(activity.time_due);
    const currentDate = new Date();
    if (dateToCompare >= currentDate) {
      setIsFutureDate(true);
    } else {
      setIsFutureDate(false);
    }
  }

  useEffect(() => {
    if (router.isReady) {
      getDataSubmission();
    }
  }, [router.isReady]);

  const [submission, setSubmission] = useState<SubmissionModel>();
  const [resources, setResources] = useState<SubmissionResourceModel[]>();
  const [act_res, setAct_res] = useState<ActivityResourceModel[]>()
  const [isFutureDate, setIsFutureDate] = useState(false)
  const getDataSubmission = async () => {
    const { data: p } = await enagApi.get(`/auth/profile`);
    const { data: s } = await enagApi.get<StudentModel>(
      `/students/user_id=${p.user_id}`
    );
    const { data: sub } = await enagApi.get<SubmissionModel>(
      `/submissions/student_id=${s?.id}&activity_id=${activity.id}`
    );
    const { data: reso } = await enagApi.get<SubmissionResourceModel[]>(
      `/submissions/resources/submission_id=${sub.id}`
    );
    const { data: res_act } = await enagApi.get<ActivityResourceModel[]>(
      `/activities/resources/activity_id=${activity.id}`
    );
    setAct_res(res_act);
    setSubmission(sub);
    setResources(reso);
    comparteDate()
  };

  return (
    <Container className="container">
      {(submission == undefined || resources == undefined||act_res==undefined) ? (
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
          <Typography variant="h4">{activity.title}</Typography>
          <Typography
            component="p"
            dangerouslySetInnerHTML={{
              __html: activity.content,
            }}
          />
          <GridRActivity activities_resources={act_res} />
          <Button
            variant="contained"
            color="error"
            onClick={goToSubmissionById}
            className={isFutureDate?'visible my-3':'invisible'}
          >
            Agregar entrega
          </Button>
          <TableContainer component={Paper} className="border rounded">
            <Table aria-label="caption table">
              <TableBody>
                <TableRow>
                  <TableCell width={300}>Estado de la entrega</TableCell>
                  <TableCell className="text-start">
                    {" "}
                    {submission?.state_sub}{" "}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width={300}>Estado de la calificación</TableCell>
                  <TableCell className="text-start">
                    {" "}
                    {submission?.state_gra == "Calificado"
                      ? submission.grade
                      : submission?.state_gra}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width={300}>Archivos enviados</TableCell>
                  <TableCell className="text-start">
                    {resources?.length == 0 ? (
                      <span> - </span>
                    ) : (
                      resources?.map((resource) => (
                        <li key={resource.id}> {resource.title} </li>
                      ))
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width={300}>Observaciones</TableCell>
                  <TableCell
                    className="text-start p-0"
                    dangerouslySetInnerHTML={{
                      __html: submission?.comment ?? "",
                    }}
                  />
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Container>
  );
};
