import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { InternCourseModel, TeacherModel, UserModel } from "@/models";
import { enagApi } from "@/apis";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { deleteInternCourse } from "@/utils/admin/intern-course/deleteInternCourse";
import { InternTeacherUser } from "@/interface/models_combine";
export default function InternCourse() {
  const router = useRouter();
  const [courses, setCourses] = useState<InternCourseModel[]>([]);
  const [teachers, setTeachers] = useState<TeacherModel[]>([]);
  const [users, setUsers] = useState<UserModel[]>([]);
  const [internsTeachersUsers, setInternsTeachersUsers] = useState<
    InternTeacherUser[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      buildData();
    }
  }, [isLoading]);

  const buildData = () => {
    let internsTeachersUsersTemp: InternTeacherUser[] = [];
    let rowsIndex: any[] = [];
    courses.map((intern) => {
      const teacher = teachers.find((tch) => tch.id == intern.teacher_id);
      const user = users.find((usr) => usr.id == teacher?.user_id);
      if (teacher != undefined && user != undefined) {
        const internTeacherUserTemp: InternTeacherUser = {
          intern,
          teacher,
          user,
        };
        internsTeachersUsersTemp = [
          ...internsTeachersUsersTemp,
          internTeacherUserTemp,
        ];
      }
    });
    setInternsTeachersUsers(internsTeachersUsersTemp);
    rowsIndex = internsTeachersUsersTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  const transformDate = (dateString: string) => {
    return dateString.split("T")[0];
  };

  const getInternTitle = (value: any) => {
    return value.title;
  };

  const getTeacher = (value: any) => {
    return `${value.names} ${value.last_names}`;
  };

  const getData = async () => {
    try {
      const { data: ints } = await enagApi.get<InternCourseModel[]>(
        `/intern_course`
      );
      setCourses(ints);
      const { data: usr } = await enagApi.get<UserModel[]>(
        `/users/user_rol=TEACHER`
      );
      setUsers(usr);
      const { data: tchs } = await enagApi.get<TeacherModel[]>(`/teachers`);
      setTeachers(tchs);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleEdit = (value: any) => {
    const { intern } = value;
    router.push({
      pathname: "/admin/intern_course/edit",
      query: { course_id: intern.id },
    });
  };

  const goToNewInternCourse = () => {
    router.push(`/admin/intern_course/new`);
  };

  const goToCourse = (value: any) => {
    const { intern } = value;
    router.push(`/admin/intern_course/${intern.id}`);
  };
  const handleDelete = async (value: any) => {
    let res: any;
    const { intern: course } = value;
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

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Título",
      width: 250,
      valueGetter: (value, row) => getInternTitle(row.intern),
    },
    {
      field: "start_at",
      headerName: "Fecha de inicio",
      width: 150,
      valueGetter: (value, row) => transformDate(row.intern.start_at),
    },
    {
      field: "end_at",
      headerName: "Fecha de fin",
      width: 150,
      valueGetter: (value, row) => transformDate(row.intern.end_at),
    },
    {
      field: "teacher",
      headerName: "Profesor",
      width: 300,
      valueGetter: (value, row) => getTeacher(row.user),
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
              onClick={() => goToCourse(params.row)}
            >
              <PlayArrowIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              color="inherit"
              onClick={() => handleEdit(params.row)}
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              color="error"
              onClick={() => handleDelete(params.row)}
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
    <>
      <Typography component="p" fontSize={22} fontWeight={700}>
        {" "}
        Pasantías{" "}
      </Typography>
      <Box sx={{ height: 450, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          disableRowSelectionOnClick
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
    </>
  );
}
