import { InternCourseModel } from "@/models";
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { deleteInternCourse } from "@/utils/admin/intern-course/deleteInternCourse";

interface Props {
  intern_courses: InternCourseModel[];
}

export const TableInternCourse: FC<Props> = ({ intern_courses: int_crs }) => {
  const router = useRouter();
  const [internCourses, setInternCourses] = useState<InternCourseModel[]>([]);
  useEffect(() => {
    setInternCourses(int_crs);
  }, [int_crs]);

  const goToNewInternCourse = () => {
    router.push(`/admin/intern_course/new`);
  };

  const goToEditInternCourse = (id: number) => {
    router.push({
      pathname: "/admin/intern_course/edit",
      query: { course_id: id },
    });
  };

  const goToInternCourse = (id: number) => {
    router.push(`/admin/intern_course/${id}`);
  };
  const handleDelete = async (course: any) => {
    let res: any;
    Swal.fire({
      icon: 'question',
      title: '¿Está seguro de eliminar?',
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteInternCourse(course);
        if (res.status == 200) {
          Swal.fire({
            icon: 'success',
            title: 'Datos eliminados',
          }).then(() => {
            setInternCourses(courses => courses.filter(c => c.id !== course.id))
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'No se pudo eliminar los datos',
          })
        }
      }
    })
  };

  return (
    <>
      <Typography variant="h4"> Tabla de cursos </Typography>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="border rounded"
        >
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Fecha de inicio</TableCell>
              <TableCell>Fecha de fin</TableCell>
              <TableCell>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {internCourses &&
              internCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.title} </TableCell>
                  <TableCell>
                    {course.start_at
                      .toString()
                      .substring(
                        0,
                        course.start_at.toString().indexOf("T")
                      )}{" "}
                  </TableCell>
                  <TableCell>
                    {course.end_at
                      .toString()
                      .substring(
                        0,
                        course.start_at.toString().indexOf("T")
                      )}{" "}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      size="medium"
                      onClick={() => goToInternCourse(course.id)}
                    >
                      <PlayArrowIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      size="medium"
                      onClick={() => goToEditInternCourse(course.id)}
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      size="medium"
                      onClick={() => handleDelete(course)}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        onClick={goToNewInternCourse}
        className="mt-2"
        color="error"
      >
        {" "}
        Nuevo curso{" "}
      </Button>
    </>
  );
};
