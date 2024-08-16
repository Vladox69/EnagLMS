import { UserModel } from "@/models";
import { useRouter } from "next/router";
import React, { FC, useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { deleteUser } from "@/utils/admin/user/deleteUser";
import Swal from "sweetalert2";
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import ImageIcon from "@mui/icons-material/Image";
import { handleDownload } from "@/utils/file/handleDownload";

interface Props {
  users: UserModel[];
}

export const TableAUser: FC<Props> = ({ users: usr }) => {
  const router = useRouter();
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    setUsers(usr);
  }, [usr]);

  const handleDelete = async (value: any) => {
    const { row: user } = value;
    let res: any;
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteUser(user);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Datos eliminados",
          }).then(() => {
            setUsers((users) => users.filter((u) => u.id !== user.id));
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

  const goToNewUser = () => {
    router.push(`/admin/users/new`);
  };

  const handleEdit = (value: any) => {
    const { row: user } = value;
    router.push({
      pathname: `/admin/users/edit`,
      query: { user_id: user.id },
    });
  };

  const columns: GridColDef<(typeof users)[number]>[] = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "username",
      headerName: "Nombre de usuario",
      width: 250,
    },
    {
      field: "email",
      headerName: "Correo",
      width: 250,
    },
    {
      field: "rol",
      headerName: "Rol",
      width: 200,
    },
    {
      field: "photo_url",
      headerName: "Foto de usuario",
      width: 250,
      renderCell: (params) => {
        const {row}=params
        if (row.rol == "ADMIN") {
          return null;
        }
        return (
          <div onClick={()=>handleDownload(row.photo_url,`${row.username}.png`)} >
            <ImageIcon />
            <span>{`${row.username}.png`}</span>
          </div>
        );
      },
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => {
        if (params.row.rol == "ADMIN") {
          return null;
        }
        return (
          <div>
            <IconButton
              aria-label="delete"
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

  return (
    <>
      <Typography component="p" fontSize={22} fontWeight={700}> Usuarios </Typography>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={users}
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
        onClick={goToNewUser}
      >
        {" "}
        Nuevo usuario{" "}
      </Button>
    </>
  );
};
