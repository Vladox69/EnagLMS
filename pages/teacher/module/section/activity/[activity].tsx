import { enagApi } from "@/apis";
import {
  ActivityModel,
  ActivityResourceModel,
  StudentModel,
  SubmissionModel,
  UserModel,
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
import Swal from "sweetalert2";

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
  const [users, setUsers] = useState<UserModel[]>([]);
  const [submission_students, setSubmission_student] = useState<
    SubmissionStudentI[]
  >([]);
  const [activity_resources, setActivity_resources] = useState<
    ActivityResourceModel[]
  >([]);

  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      if (router.isReady) {
        const { activity: id } = router.query;
        const { data: usr } = await enagApi.get<UserModel[]>(
          `/users/user_rol=STUDENT`
        );
        setUsers(usr);
        const { data: actv } = await enagApi.get<ActivityModel>(
          `/activities/activity_id=${id}`
        );
        setActivity(actv);
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
        setSubmission_student(sub_stu);
        const { data: actv_res } = await enagApi.get<ActivityResourceModel[]>(
          `/activities/resources/activity_id=${id}`
        );
        setActivity_resources(actv_res);
        setIsLoading(false);
      }
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos porblemas al cargar los datos",
      });
      setIsLoading(false);
    }
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
          <Container className="container">
            <Typography component="p" fontSize={22} fontWeight={700}>
              {" "}
              {activity?.title}{" "}
            </Typography>
            <Typography
              component="p"
              dangerouslySetInnerHTML={{
                __html: activity?.content || "",
              }}
            />
            <Typography component="p" className="fw-bold">
              {" "}
              Límite de entrega{" "}
            </Typography>
            <Typography component="p">
              {" "}
              {activity?.time_due
                .toString()
                .substring(0, activity.time_due.toString().indexOf("T"))}{" "}
            </Typography>
            <Typography component="p" fontWeight={700}>
              {" "}
              Recursos{" "}
            </Typography>
            {activity_resources.length == 0 ? (
              <Typography
                component="p"
                className="text-secondary"
                fontWeight={700}
              >
                {" "}
                No existen recursos{" "}
              </Typography>
            ) : (
              <GridTActivityResource resources={activity_resources} />
            )}

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
                  activity_id={activity?.id || 0}
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
            <TableSubmission submissions={submission_students} users={users} />
          </Container>
        )}
      </Container>
    </>
  );
};

export default TeacherActivityById;
