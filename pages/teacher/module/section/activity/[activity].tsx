import { enagApi } from "@/apis";
import { Layout } from "@/components/layouts";
import {
  ActivityModel,
  ActivityResourceModel,
  StudentModel,
  SubmissionModel,
} from "@/models";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  CircularProgress,
} from "@mui/material";
import { TableSubmission } from "@/components/teacher/Activity/Submission/TableSubmission";
import { SubmissionStudentI } from "@/interface/submission_student";
import { useRouter } from "next/router";
import { GridTActivityResource } from "@/components/teacher/Activity/Resource/GridTActivityResource";
import { FormActivityResource } from "@/components/teacher/Activity/Resource/FormActivityResource";

interface Props {
  activity: ActivityModel;
  submission_students: SubmissionStudentI[];
  activity_resources: ActivityResourceModel[];
}

export const TeacherActivityById: NextPage<Props> = ({}) => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const [activity, setActivity] = useState<ActivityModel>();
  const [submission_students, setSubmission_student] = useState<
    SubmissionStudentI[]
  >([]);
  const [activity_resources, setActivity_resources] = useState<
    ActivityResourceModel[]
  >([]);

  const [open, setOpen] = useState(false);

  const getData = async () => {
    try {
      if (router.isReady) {
        const { activity: id } = router.query;
        const { data: actv } = await enagApi.get<ActivityModel>(
          `/activities/activity_id=${id}`
        );
        const { data: actv_res } = await enagApi.get<ActivityResourceModel[]>(
          `/activities/resources/activity_id=${id}`
        );
        const { data: subms } = await enagApi.get<SubmissionModel[]>(
          `/submissions/activity_id=${id}`
        );
        const studentsPromises = subms.map(async (sub) => {
          const { data: student } = await enagApi.get<StudentModel>(
            `/students/student_id=${sub.student_id}`
          );
          return student;
        });
        const students = await Promise.all(studentsPromises);
        const resourcePromises = subms.map(async (sub) => {
          const { data: resource } = await enagApi.get(
            `/submissions/resources/submission_id=${sub.id}`
          );
          return resource;
        });
        const data = await Promise.all(resourcePromises);
        const resSub = data.flat();

        const sub_stu = subms.map((submission) => {
          const student = students.find((s) => s.id == submission.student_id);
          const resource = resSub.filter(
            (r) => r.submission_id == submission.id
          );
          return {
            id_submission: submission.id,
            student: student,
            submission: submission,
            resources: resource || "No entregado",
          };
        });
        setActivity(actv);
        setActivity_resources(actv_res);
        setSubmission_student(sub_stu);
      }
    } catch (error) {}
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (formData: any) => {
    if (formData.status == 200) {
      handleClose();
    }
  };

  

  return (
    <Layout title="My activity">
      <Container className="container">
        {activity == undefined ||
        submission_students == undefined ||
        activity_resources == undefined ? (
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
            <Typography variant="h4"> {activity.title} </Typography>
            <Typography
              component="p"
              dangerouslySetInnerHTML={{
                __html: activity.content,
              }}
            />
            <Typography component="p" className="fw-bold">
              {" "}
              Límite de entrega{" "}
            </Typography>
            <Typography component="p">
              {" "}
              {activity.time_due
                .toString()
                .substring(0, activity.time_due.toString().indexOf("T"))}{" "}
            </Typography>
            <Typography component="p"> Recursos </Typography>
            <GridTActivityResource resources={activity_resources} />
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title" className="text-center">
                Nuevo recurso
              </DialogTitle>
              <DialogContent>
                <FormActivityResource
                  activity_id={activity.id}
                  onSubmitResource={handleFormSubmit}
                  onCancel={handleClose}
                />
              </DialogContent>
            </Dialog>
            <Button
              variant="contained"
              className="my-2"
              color="error"
              onClick={handleOpen}
            >
              {" "}
              Añadir recurso{" "}
            </Button>
            <TableSubmission submissions={submission_students} />
          </Container>
        )}
      </Container>
    </Layout>
  );
};

export default TeacherActivityById;
