import { enagApi } from "@/apis";
import { Layout } from "@/components/layouts";
import {
  CourseModel,
  InscriptionModel,
  ModuleModel,
  StudentModel,
} from "@/models";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { ListAModule } from "@/components/admin/course/ListAModule";
import { FormAModule } from "@/components/admin/course/FormAModule";
import { ListAStudent } from "../../../components/admin/course/ListAStudent";
import { FormAInscription } from "@/components/admin/course/FormAInscription";
import Swal from "sweetalert2";
import { editCourse } from "@/utils/admin/course/editCourse";
import { resetCourse } from "@/utils/admin/course/resetCourse";

export const CourseAdminById = () => {
  const router = useRouter();
  const { courses: id } = router.query;
  const [course, setCourse] = useState<CourseModel>();
  const [modules, setModules] = useState<ModuleModel[]>([]);
  const [open, setOpen] = useState(false);
  const [openStudent, setOpenStudent] = useState(false);
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [inscriptions, setInscriptions] = useState<InscriptionModel[]>([]);

  const getData = async () => {
    if (router.isReady) {
      const { data: course } = await enagApi.get(`/courses/course_id=${id}`);
      setCourse(course);
      const { data: modules } = await enagApi.get(`/modules/course_id=${id}`);
      setModules(modules);
      const { data: insciptions } = await enagApi.get<InscriptionModel[]>(
        `/inscriptions/course_id=${id}`
      );
      setInscriptions(insciptions);
      const studentsPromises = insciptions.map(async (ins) => {
        const { data: student } = await enagApi.get(
          `/students/student_id=${ins.student_id}`
        );
        return student;
      });
      const students = await Promise.all(studentsPromises);
      setStudents(students);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenStudent = () => {
    setOpenStudent(true);
  };

  const handleCloseStudent = () => {
    setOpenStudent(false);
  };

  const handleFormSubmitStudent = async (formData: any) => {
    if (formData.status == 200) {
      getData();
      handleCloseStudent();
    }
  };

  const handleFormSubmit = async (formData: any) => {
    if (formData.status == 200) {
      getData();
      handleClose();
    }
  };

  const startCourse = async () => {
    let res: any;
    Swal.fire({
      icon: "question",
      title:
        "Después de iniciar el curso no se podrá agregar módulos ni estudiantes. ¿Está seguro?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const courseStart = {
          ...course,
          is_start: true,
        };
        res = await editCourse(courseStart);
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

  const reset = async () => {
    let res: any;
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
        const resReset: any = await resetCourse(courseReset);
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
  };

  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  return (
    <Layout>
      <Container className="container ">
        <Typography variant="h4">Bienvenidos al curso {course?.topic}</Typography>
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
          <DialogTitle id="form-dialog-title">Inscribir estudiante</DialogTitle>
          <DialogContent>
            <FormAInscription
              students_ins={students}
              course_id={Number(id)}
              onSubmitResource={handleFormSubmitStudent}
              onCancel={handleCloseStudent}
            />
          </DialogContent>
        </Dialog>
        <ListAStudent
          inscriptions={inscriptions}
          is_start={course?.is_start || false}
        />
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

        <Typography variant="h4">Módulos</Typography>
        <hr />
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Datos del módulo</DialogTitle>
          <DialogContent>
            <FormAModule
              course_id={Number(id)}
              onSubmitResource={handleFormSubmit}
              onCancel={handleClose}
            />
          </DialogContent>
        </Dialog>
        <ListAModule modules={modules} is_start={course?.is_start || false} />
        {!course?.is_start && (
          <Button variant="contained" color="error" onClick={handleOpen}>
            {" "}
            Nuevo módulo{" "}
          </Button>
        )}
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
    </Layout>
  );
};

export default CourseAdminById;
