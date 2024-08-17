import { enagApi } from "@/apis";
import {
  CourseModel,
  InscriptionModel,
  ModuleModel,
  StudentModel,
  TeacherModel,
  UserModel,
} from "@/models";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import {
  Container,
  Typography,
  Button,
  Box,
  CircularProgress,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { editCourse } from "@/utils/admin/course/editCourse";
import { resetCourse } from "@/utils/admin/course/resetCourse";
import {
  InscriptionUserStudent,
  ModuleUserTeacher,
} from "@/interface/models_combine";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { deleteInscription } from "@/utils/admin/inscription/deleteInscription";
import { deleteModule } from "@/utils/admin/course/module/deleteModule";

const getUserNames = (user: any) => {
  return user === undefined ? "N/A" : user.names;
};

const getUserLastNames = (user: any) => {
  return user === undefined ? "N/A" : user.last_names;
};

const getUserIdCard = (user: any) => {
  return user === undefined ? "N/A" : user.ID_card_url;
};

const getUserName = (user: any) => {
  return user === undefined ? "N/A" : user.username;
};

const getModuleName = (module: any) => {
  return module == undefined ? "N/A" : module.title;
};

export const CourseAdminById = () => {
  const router = useRouter();
  const { courses: id } = router.query;
  const [course, setCourse] = useState<CourseModel>();
  const [modules, setModules] = useState<ModuleModel[]>([]);
  const [open, setOpen] = useState(false);
  const [openStudent, setOpenStudent] = useState(false);
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [inscriptions, setInscriptions] = useState<InscriptionModel[]>([]);
  const [teachers, setTeachers] = useState<TeacherModel[]>([]);
  const [users, setUsers] = useState<UserModel[]>([]);
  const [inscriptionsUsersStudents, setInscriptionsUsersStudents] = useState<
    InscriptionUserStudent[]
  >([]);
  const [modulesUsersTeachers, setModulesUsersTeachers] = useState<
    ModuleUserTeacher[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rowsStudents, setRowsStudents] = useState<any[]>([]);
  const [rowsModules, setRowsModules] = useState<any[]>([]);

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
          !course?.is_start && (
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
          )
        );
      },
      sortable: false,
      filterable: false,
    },
  ];
  const columnsModules: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "module",
      headerName: "Módulo",
      width: 200,
      valueGetter: (value, row) => getModuleName(row.module),
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
      width: 200,
      valueGetter: (value, row) => getUserNames(row.user),
    },
    {
      field: "last_names",
      headerName: "Apellidos",
      width: 200,
      valueGetter: (value, row) => getUserLastNames(row.user),
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 100,
      renderCell: (params) => {
        return (
          !course?.is_start && (
            <div>
              <IconButton
                aria-label="edit"
                size="medium"
                color="inherit"
                onClick={() => goToEditModule(params)}
              >
                <EditIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="medium"
                color="error"
                onClick={() => handleDeleteModule(params)}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          )
        );
      },
      sortable: false,
      filterable: false,
    },
  ];

  const transformDate = (dateString: string) => {
    return dateString.split("T")[0];
  };

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
        res = await deleteInscription(row.inscription);
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

  const handleDeleteModule = (value: any) => {
    const { row } = value;
    let res: any;
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteModule(row.module);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Datos eliminados",
          }).then(() => {
            const auxData = modulesUsersTeachers.filter(
              (data) => data.module.id != row.module.id
            );
            const rowsIndex = auxData.map((data, index) => ({
              ...data,
              id: index + 1,
            }));
            setRowsModules(rowsIndex);
            setModulesUsersTeachers(auxData);
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

  const goToEditModule = (value: any) => {
    const { row } = value;
    router.push(`/admin/courses/module/edit?module_id=${row.module.id}`);
  };

  const getData = async () => {
    try {
      const { data: course } = await enagApi.get(`/courses/course_id=${id}`);
      setCourse(course);
      const { data: modules } = await enagApi.get(`/modules/course_id=${id}`);
      setModules(modules);
      const { data: insciptions } = await enagApi.get<InscriptionModel[]>(
        `/inscriptions/course_id=${id}`
      );
      setInscriptions(insciptions);
      const { data: usr } = await enagApi.get<UserModel[]>(`/users`);
      setUsers(usr);
      const { data: sts } = await enagApi.get<StudentModel[]>(`/students`);
      setStudents(sts);
      const { data: tchs } = await enagApi.get<TeacherModel[]>(`/teachers`);
      setTeachers(tchs);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const goToNewModule = () => {
    router.push(`/admin/courses/module/new?course_id=${id}`);
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

  const goToInscriptions = () => {
    router.push(`/admin/courses/students/${id}`);
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

  const buildData = () => {
    let inscriptionsUsersStudentsTemp: InscriptionUserStudent[] = [];
    let rowsIndexStudents: any[] = [];
    inscriptions.map((inscription) => {
      const student = students.find((sts) => sts.id == inscription.student_id);
      const user = users.find((usr) => usr.id == student?.user_id);
      if (student != undefined && user != undefined) {
        const inscriptionUserStudent: InscriptionUserStudent = {
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
    setInscriptionsUsersStudents(inscriptionsUsersStudentsTemp);
    rowsIndexStudents = inscriptionsUsersStudentsTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRowsStudents(rowsIndexStudents);

    let modulesUsersTeachersTemp: ModuleUserTeacher[] = [];
    let rowsIndexModules: any[] = [];
    modules.map((md) => {
      const teacher = teachers.find((tch) => tch.id == md.teacher_id);
      const user = users.find((usr) => usr.id == teacher?.user_id);
      if (teacher != undefined && user != undefined) {
        const moduleUserTeacherTemp: ModuleUserTeacher = {
          module: md,
          teacher,
          user,
        };
        modulesUsersTeachersTemp = [
          ...modulesUsersTeachersTemp,
          moduleUserTeacherTemp,
        ];
      }
    });
    setModulesUsersTeachers(modulesUsersTeachersTemp);
    rowsIndexModules = modulesUsersTeachersTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRowsModules(rowsIndexModules);
  };

  return (
    <>
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
        <Container className="container ">
          <Typography component="p" fontSize={24} fontWeight={700}>
            {course?.topic}
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

          <Typography component="p" fontSize={22} fontWeight={700}>
            Módulos
          </Typography>

          <Box sx={{ height: 350, width: "100%" }}>
            <DataGrid
              rows={rowsModules}
              columns={columnsModules}
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
              color="error"
              className="my-2"
              onClick={goToNewModule}
            >
              {" "}
              Nuevo módulo{" "}
            </Button>
          )}
          {course?.is_start && (
            <Button
              onClick={reset}
              variant="contained"
              color="error"
              className="my-2"
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

export default CourseAdminById;
