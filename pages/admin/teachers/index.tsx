import { enagApi } from "@/apis";
import { TeacherModel, UserModel } from "@/models";
import React, { useEffect, useState } from "react";
import { CustomDialog } from "@/components/my/CustomDialog";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Swal from "sweetalert2";
import { deleteTeacher } from "@/utils/admin/teacher/deleteTeacher";
import { UserTeacher } from "@/interface/models_combine";
import { Box, Button, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { useRouter } from "next/router";

const DocumentDialog = (title: string, url: string) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <p onClick={handleOpen}>
        <PictureAsPdfIcon />
        <span>{`${title}.pdf`}</span>
      </p>
      <CustomDialog
        open={open}
        handleClose={handleClose}
        title={`${title}.pdf`}
        url={url}
      />
    </>
  );
};

const getUserNames = (user: any) => {
  return user === undefined ? "N/A" : user.names;
};

const getUserLastNames = (user: any) => {
  return user === undefined ? "N/A" : user.last_names;
};

const getUserName = (user: any) => {
  return user === undefined ? "N/A" : user.username;
};

export default function Teachers() {
  //Data
  const [teachers, setTeachers] = useState<TeacherModel[]>([]);
  const [users, setUsers] = useState<UserModel[]>([]);
  //Data combine
  const [usersTeachers, setUsersTeachers] = useState<UserTeacher[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
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
      field: "id_card",
      headerName: "Cédula",
      width: 200,
      renderCell: (params) => {
        const { row } = params;
        const names = row.user.names.split(" ");
        const last_names = row.user.last_names.split(" ");
        const title = `Cedula${names[0]}${last_names[0]}`;
        return DocumentDialog(title, row.user.ID_card_url);
      },
    },
    {
      field: "cv_url",
      headerName: "Hoja de vida",
      width: 200,
      renderCell: (params) => {
        const { row } = params;
        const names = row.user.names.split(" ");
        const last_names = row.user.last_names.split(" ");
        const title = `CV${names[0]}${last_names[0]}`;
        return DocumentDialog(title, row.teacher.cv_url);
      },
    },
    {
      field: "third_level_degree",
      headerName: "Título de tercer nivel",
      width: 200,
      renderCell: (params) => {
        const { row } = params;
        const names = row.user.names.split(" ");
        const last_names = row.user.last_names.split(" ");
        const title = `Titulo${names[0]}${last_names[0]}.pdf`;
        return DocumentDialog(title, row.teacher.third_level_degree);
      },
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            <IconButton
              aria-label="edit"
              size="medium"
              color="inherit"
              onClick={() => handleEdit(params)}
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              color="error"
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

  const handleEdit = (value: any) => {
    const { row: teacher } = value;
    router.push({
      pathname: "/admin/teachers/edit",
      query: { teacher_id: teacher.id },
    });
  };
  const goToNewTeacher = () => {
    router.push(`/admin/teachers/new`);
  };

  const handleDelete = async (value: any) => {
    const { row } = value;
    let res: any;
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteTeacher(row.teacher);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Datos eliminados",
          }).then(() => {
            setUsersTeachers((usersTeachers) =>
              usersTeachers.filter((ustc) => ustc.teacher.id == row.teacher.id)
            );
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
    getData();
  }, []);

  useEffect(() => {
    if(!isLoading){
        buildData()
    }
  }, [isLoading])
  

  const getData = async () => {
    try {
      const { data } = await enagApi.get<TeacherModel[]>(`/teachers`);
      setTeachers(data);
      const {data:usrs}=await enagApi.get<UserModel[]>(`/users/user_rol=TEACHER`)
      setUsers(usrs)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const buildData=()=>{
    let usersTeacherTemp: UserTeacher[] = [];
    let rowsIndex: any[] = [];
    teachers.map((teacher) => {
      const user = users.find((usr) => usr.id == teacher.user_id);
      if (user != undefined) {
        const userTeacherTemp: UserTeacher = {
          user,
          teacher
        };
        usersTeacherTemp = [...usersTeacherTemp, userTeacherTemp];
      }
    });
    setUsersTeachers(usersTeacherTemp);
    rowsIndex = usersTeacherTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  }

  return (
    <>
      <Typography component="p" fontSize={22} fontWeight={700}>
        {" "}
        Estudiantes{" "}
      </Typography>
      <div className="mt-2">
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
            pageSizeOptions={[10]}
          />
        </Box>
        <Button
          variant="contained"
          className="mt-2"
          color="error"
          onClick={goToNewTeacher}
        >
          Nuevo Profesor
        </Button>
      </div>
    </>
  );
}
