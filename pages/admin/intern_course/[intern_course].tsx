import { enagApi } from "@/apis";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  InternCourseModel,
  InternInscriptionModel,
  StudentModel,
  UserModel,
} from "@/models";
import { editInternCourse } from "@/utils/admin/intern-course/editInternCourse";
import { resetInternCourse } from "@/utils/admin/intern-course/resetInternCourse";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { deleteInternInscription } from "@/utils/admin/intern-inscription/deleteInternInscription";
import { InternInscriptionUserStudent } from "@/interface/models_combine";
const getUserNames = (user: any) => {
  return user === undefined ? "N/A" : user.names;
};

const getUserLastNames = (user: any) => {
  return user === undefined ? "N/A" : user.last_names;
};

const getUserName = (user: any) => {
  return user === undefined ? "N/A" : user.username;
};

export const InternCourseById = () => {
  const router = useRouter();
  const { intern_course: id } = router.query;
  const [course, setCourse] = useState<InternCourseModel>();
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [inscriptions, setInscriptions] = useState<InternInscriptionModel[]>(
    []
  );
  const [users, setUsers] = useState<UserModel[]>([]);
  const [rowsStudents, setRowsStudents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inscriptionsUsersStudents, setInscriptionsUsersStudents] = useState<
    InternInscriptionUserStudent[]
  >([]);

  const transformDate = (dateString: string) => {
    return dateString.split("T")[0];
  };

  const columnsStudents: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "date",
      headerName: "Fecha de inscripción",
      width: 200,
      valueGetter: (value, row) =>
        transformDate(row.inscription.date.toString()),
    },
    {
      field: "username",
      headerName: "Usuario",
      width: 150,
      renderCell: (params) => (
        <Link
          href={`/admin/users/edit?user_id=${params.row.user.id}`}
          passHref
          target="_blank"
          className="text-decoration-none"
        >
          {params.row.user.username}
        </Link>
      ),
      valueGetter: (value, row) => getUserName(row.user),
    },
    {
      field: "names",
      headerName: "Nombres",
      width: 250,
      valueGetter: (value, row) => getUserNames(row.user),
    },
    {
      field: "last_names",
      headerName: "Apellidos",
      width: 250,
      valueGetter: (value, row) => getUserLastNames(row.user),
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
              color="error"
              onClick={() => handleDeleteInscription(params)}
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

  const handleDeleteInscription = (value: any) => {
    const { row } = value;
    let res: any;
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteInternInscription(row.inscription);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Datos eliminados",
          }).then(() => {
            const auxData = inscriptionsUsersStudents.filter(
              (data) => data.inscription.id != row.inscription.id
            );
            const rowsIndex = auxData.map((data, index) => ({
              ...data,
              id: index + 1,
            }));
            setRowsStudents(rowsIndex);
            setInscriptionsUsersStudents(auxData);
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
  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  useEffect(() => {
    if (!isLoading) {
      buildData();
    }
  }, [isLoading]);

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
      const { data: usr } = await enagApi.get<UserModel[]>(
        `/users/user_rol=STUDENT`
      );
      setUsers(usr);
      const { data: sts } = await enagApi.get<StudentModel[]>(`/students/intern_id=${id}`);
      setStudents(sts);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const buildData = () => {
    let inscriptionsUsersStudentsTemp: InternInscriptionUserStudent[] = [];
    let rowsIndexStudents: any[] = [];
    inscriptions.map((inscription) => {
      const student = students.find((sts) => sts.id == inscription.student_id);
      const user = users.find((usr) => usr.id == student?.user_id);
      if (student != undefined && user != undefined) {
        const inscriptionUserStudent: InternInscriptionUserStudent = {
          inscription,
          student,
          user,
        };
        inscriptionsUsersStudentsTemp = [
          ...inscriptionsUsersStudentsTemp,
          inscriptionUserStudent,
        ];
      }
    });
    console.log(users);

    setInscriptionsUsersStudents(inscriptionsUsersStudentsTemp);
    rowsIndexStudents = inscriptionsUsersStudentsTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRowsStudents(rowsIndexStudents);
  };

  const goToInscriptions = () => {
    router.push(`/admin/intern_course/students/${id}`);
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

  const reset = async () => {
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
            getData();
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
          <Typography component="p" fontSize={24} fontWeight={700}>
            {course?.title}{" "}
          </Typography>
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
          <Typography component="p" fontSize={22} fontWeight={700}>
            Estudiantes inscritos
          </Typography>
          <Box sx={{ height: 350, width: "100%" }}>
            <DataGrid
              rows={rowsStudents}
              columns={columnsStudents}
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
          {!course?.is_start && (
            <Button
              variant="contained"
              onClick={goToInscriptions}
              color="error"
              className="my-2"
            >
              {" "}
              Agregar estudiante{" "}
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
      )}
    </>
  );
};

export default InternCourseById;
