import { enagApi } from "@/apis";
import { StudentModel, UserModel } from "@/models";
import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserStudent } from "@/interface/models_combine";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { deleteStudent } from "@/utils/admin/student/deleteStudent";
import { CustomDialog } from "@/components/my/CustomDialog";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Link from "next/link";

const date = new Date();
const formattedDate = new Intl.DateTimeFormat("es-ES").format(date);

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

const getUserIdCard = (user: any) => {
  return user === undefined ? "N/A" : user.ID_card_url;
};

const getUserName=(user:any)=>{
  return user===undefined?"N/A":user.username
}

export default function Teachers() {
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [users, setUsers] = useState<UserModel[]>([]);
  const [studentsUsers, setStudentsUsers] = useState<UserStudent[]>([]);
  const router = useRouter();
  const [rows, setRows] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleDelete = async (value: any) => {
    let res: any;
    const { row } = value;
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteStudent(row.student);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Datos eliminados",
          }).then(() => {
            setStudentsUsers((studentsUsers) =>
              studentsUsers.filter((s) => s.student.id !== row.student.id)
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
  const handleEdit = (value: any) => {
    const { row } = value;
    router.push({
      pathname: "/admin/students/edit",
      query: { student_id: row.student.id },
    });
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field:"username",headerName:"Usuario",width:150,
      renderCell: (params) => (
        <Link href={`/admin/users/edit?user_id=${params.row.user.id}`} passHref target="_blank" className="text-decoration-none">
            {params.row.user.username}
        </Link>
      ),
      valueGetter:(value,row)=>getUserName(row.user)
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
      field: "id_card",
      headerName: "Cédula",
      width: 250,
      renderCell: (params) => {
        const { row } = params;
        const names = row.user.names.split(" ");
        const last_names = row.user.last_names.split(" ");
        const title = `Cedula${names[0]}${last_names[0]}`;
        return DocumentDialog(title, row.user.ID_card_url);
      },
    },
    {
      field: "study_certificate_url",
      headerName: "Certificado de estudio",
      width: 300,
      renderCell: (params) => {
        const { row } = params;
        const names = row.user.names.split(" ");
        const last_names = row.user.last_names.split(" ");
        const title = `CetificadoEstudio${names[0]}${last_names[0]}`;
        return DocumentDialog(title, row.student.study_certificate_url);
      },
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 150,
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

  const goToNewStudent = () => {
    router.push(`/admin/students/new`);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      buildData();
    }
  }, [isLoading]);

  const getData = async () => {
    try {
      const { data: usrs } = await enagApi.get<UserModel[]>(
        `/users/user_rol=STUDENT`
      );
      setUsers(usrs);
      const { data: sts } = await enagApi.get<StudentModel[]>(`/students`);
      setStudents(sts);
      setIsLoading(false);
    } catch (error) {}
  };
  const buildData = () => {
    let usersStudentsTemp: UserStudent[] = [];
    let rowsIndex: any[] = [];
    students.map((student) => {
      const user = users.find((usr) => usr.id == student.user_id);
      if (user != undefined) {
        const userStudentTemp: UserStudent = {
          user,
          student,
        };
        usersStudentsTemp = [...usersStudentsTemp, userStudentTemp];
      }
    });
    setStudentsUsers(usersStudentsTemp);
    rowsIndex = usersStudentsTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };
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
          onClick={goToNewStudent}
        >
          Nuevo estudiante
        </Button>
      </div>
    </>
  );
}
