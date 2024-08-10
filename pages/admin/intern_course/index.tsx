import React, { useEffect, useState } from "react";
import { Layout } from "@/components/layouts";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { InternCourseModel, TeacherModel } from "@/models";
import { enagApi } from "@/apis";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { deleteInternCourse } from "@/utils/admin/intern-course/deleteInternCourse";
export default function InternCourse() {
  const router = useRouter();
  const [courses, setCourses] = useState<InternCourseModel[]>([]);
  const [teachers, setTeachers] = useState<TeacherModel[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const transformDate = (dateString: string) => {
    return dateString.split("T")[0];
  };

  const getTeacher = (id: number) => {
    const auxTeacher = teachers.find((t) => t.id == id);
    // const name = auxTeacher?.names.split(" ")[0];
    // const lastName = auxTeacher?.last_names.split(" ")[0];
    return `${auxTeacher?.names} ${auxTeacher?.last_names}`;
  };

  const getData = async () => {
    const { data: ints } = await enagApi.get<InternCourseModel[]>(
      `/intern_course`
    );
    setCourses(ints);
    const { data: tchs } = await enagApi.get<TeacherModel[]>(`/teachers`);
    setTeachers(tchs);
  };

  const handleEdit = (value: any) => {
    const { row: intern } = value;
    router.push({
      pathname: "/admin/intern_course/edit",
      query: { course_id: intern.id },
    });
  };

  const goToNewInternCourse = () => {
    router.push(`/admin/intern_course/new`);
  };

  const goToCourse = (value: any) => {
    const { row: intern } = value;
    router.push(`/admin/intern_course/${intern.id}`);
  };
  const handleDelete = async (value: any) => {
    let res: any;
    const { row: course } = value;
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteInternCourse(course);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Datos eliminados",
          }).then(() => {
            setCourses((courses) => courses.filter((c) => c.id !== course.id));
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "No se pudo eliminar los datos",
          });
        }
      }
    });
  };

  const columns: GridColDef<(typeof courses)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Título", width: 250 },
    {
      field: "start_at",
      headerName: "Fecha de inicio",
      width: 150,
      valueGetter: (params) => transformDate(params),
    },
    {
      field: "end_at",
      headerName: "Fecha de fin",
      width: 150,
      valueGetter: (params) => transformDate(params),
    },
    {
      field: "teacher_id",
      headerName: "Profesor",
      width: 250,
      valueGetter: (params) => getTeacher(params),
    },
    {
      field: "is_start",
      headerName: "Iniciado",
      width: 90,
      type: "boolean",
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <IconButton
              aria-label="delete"
              size="medium"
              onClick={() => goToCourse(params)}
            >
              <PlayArrowIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              onClick={() => handleEdit(params)}
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              onClick={() => handleDelete(params)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>
        );
      },
      sortable: false,
      filterable: false,
    },
  ];
  return (
    <Layout>
      <Typography variant="h4" className="mb-2">
        Tabla de cursos de pasantía
      </Typography>
      <Box sx={{ height: 450, width: "100%" }}>
        <DataGrid
          rows={courses}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
        />
      </Box>
      <Button
        variant="contained"
        onClick={goToNewInternCourse}
        className="mt-2"
        color="error"
      >
        {" "}
        Nuevo curso{" "}
      </Button>
    </Layout>
  );
}
