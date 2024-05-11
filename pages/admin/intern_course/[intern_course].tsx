import { enagApi } from "@/apis";
import { FormInternInscription } from "@/components/admin/intern-course/FormInternInscription";
import { ListInternStudent } from "@/components/admin/intern-course/ListInternStudent";
import { Layout } from "@/components/layouts";
import {
  InternCourseModel,
  InternInscriptionModel,
  StudentModel,
} from "@/models";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const InternCourseById = () => {
  const router = useRouter();
  const { intern_course: id } = router.query;
  const [course, setCourse] = useState<InternCourseModel>();
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [inscriptions, setInscriptions] = useState<InternInscriptionModel[]>(
    []
  );
  const [openStudent, setOpenStudent] = useState(false);
  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const getData = async () => {
    try {
      const { data: c } = await enagApi.get<InternCourseModel>(
        `/intern_course/course_id=${id}`
      );
      setCourse(c);
      const { data: ins } = await enagApi.get<InternInscriptionModel[]>(
        `/intern_inscription/course_id=${id}`
      );
      setInscriptions(ins);
      const inscription_ids = ins.map((inscrip) => {
        return inscrip.student_id;
      });
      const body = {
        inscription_ids,
      };
      const { data: sts } = await enagApi.post<StudentModel[]>(
        `/students/student_ids`,
        body
      );
      
      setStudents(sts);
    } catch (error) {
      console.log(error);
      
    }
  };

  const handleFormSubmitStudent = async (formData: any) => {
    if (formData.status == 200) {
      getData();
      handleCloseStudent();
    }
  };

  const handleOpenStudent = () => {
    setOpenStudent(true);
  };

  const handleCloseStudent = () => {
    setOpenStudent(false);
  };

  return (
    <Layout>
      {(course == undefined ||students == undefined ||inscriptions == undefined)?
       (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh" // Ajusta esta altura según tus necesidades
        >
          <CircularProgress size={100} color="error" />
        </Box>
       ):(
        <Container className="container">
        <Typography variant="h4"> {course?.title} </Typography>
        <Typography
          component="p"
          dangerouslySetInnerHTML={{
            __html: !!course ? course!.content : "",
          }}
        />
        <Typography variant="h4">Estudiantes inscritos</Typography>
        <hr />
        <Dialog
          open={openStudent}
          onClose={handleCloseStudent}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Inscribir estudiante</DialogTitle>
          <DialogContent>
            <FormInternInscription
              students_ins={students}
              course_id={Number(id)}
              onSubmitResource={handleFormSubmitStudent}
              onCancel={handleCloseStudent}
            />
          </DialogContent>
        </Dialog>

        <Button
          variant="contained"
          onClick={handleOpenStudent}
          color="error"
          className="mb-2"
        >
          {" "}
          Agregar estudiante{" "}
        </Button>
        <ListInternStudent inscriptions={inscriptions} />
      </Container>
       )  
    }

    </Layout>
  );
};

export default InternCourseById;
