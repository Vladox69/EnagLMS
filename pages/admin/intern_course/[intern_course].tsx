import { enagApi } from "@/apis";
import { FormInternInscription } from "@/components/admin/intern-course/FormInternInscription";
import { ListInternStudent } from "@/components/admin/intern-course/ListInternStudent";
import {
  InternCourseModel,
  InternInscriptionModel,
  StudentModel,
} from "@/models";
import { editInternCourse } from "@/utils/admin/intern-course/editInternCourse";
import { resetInternCourse } from "@/utils/admin/intern-course/resetInternCourse";
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
import Swal from "sweetalert2";

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

  const startCourse = async () => {
    let res: any;
    Swal.fire({
      icon: "question",
      title:
        "Después de iniciar el curso no se podrá agregar estudiantes. ¿Está seguro?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const courseStart = {
          ...course,
          is_start: true,
        };
        res = await editInternCourse(courseStart);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Curso iniciado",
          }).then(() => {
            setCourse(res.data);
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "No se pudo iniciar el curso",
          });
        }
      }
    });
  };
  
  const reset=async()=>{
    Swal.fire({
      icon: "question",
      title:
        "Después de reiniciar todos los datos serán eliminados. ¿Está seguro?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const courseReset = {
          ...course,
          is_start: false,
        };
        const resReset: any = await resetInternCourse(courseReset);
        if (resReset.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Curso reiniciado",
          }).then(() => {
            getData()
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "No se pudo reiniciar el curso",
          });
        }
      }
    });
  }

  return (
    <>
      {course == undefined ||
      students == undefined ||
      inscriptions == undefined ? (
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
          <Typography variant="h4"> {course?.title} </Typography>
          <Typography
            component="p"
            dangerouslySetInnerHTML={{
              __html: !!course ? course!.content : "",
            }}
          />
        {!course?.is_start && (
          <Button variant="contained" color="error" onClick={startCourse}>
            {" "}
            Iniciar curso{" "}
          </Button>
        )}
          <Typography variant="h4">Estudiantes inscritos</Typography>
          <hr />
          <Dialog
            open={openStudent}
            onClose={handleCloseStudent}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Inscribir estudiante
            </DialogTitle>
            <DialogContent>
              <FormInternInscription
                students_ins={students}
                course_id={Number(id)}
                onSubmitResource={handleFormSubmitStudent}
                onCancel={handleCloseStudent}
              />
            </DialogContent>
          </Dialog>

          {!course?.is_start && (
          <Button
            variant="contained"
            onClick={handleOpenStudent}
            color="error"
            className="mb-2"
          >
            {" "}
            Agregar estudiante{" "}
          </Button>
        )}
          <ListInternStudent inscriptions={inscriptions} is_start={course?.is_start || false} />
          {course?.is_start && (
          <Button
            onClick={reset}
            variant="contained"
            color="error"
            className="mb-2"
          >
            {" "}
            Reiniciar curso{" "}
          </Button>
        )}
        </Container>
      )}
    </>
  );
};

export default InternCourseById;
