import { UserModel } from "@/models";
import { useRouter } from "next/router";
import React, { FC, useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import { deleteUser } from "@/utils/admin/user/deleteUser";
import Swal from "sweetalert2";
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import ImageIcon from "@mui/icons-material/Image";
import { handleDownload } from "@/utils/file/handleDownload";
import emailjs from "emailjs-com";
import { enagApi } from "@/apis";

interface Props {
  users: UserModel[];
}

const getNames = (user: any) => {
  return user === undefined ? "N/A" : user.names;
};

const getLastNames = (user: any) => {
  return user === undefined ? "N/A" : user.names;
};

export const TableAUser: FC<Props> = ({ users: usr }) => {
  const router = useRouter();
  const [users, setUsers] = useState<UserModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setUsers(usr);
  }, [usr]);

  const handleDelete = async (value: any) => {
    try {
      const { row: user } = value;
      let res: any;
      Swal.fire({
        icon: "question",
        title: "¿Está seguro de eliminar?",
        showConfirmButton: true,
        showDenyButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          setIsLoading(true);
          res = await deleteUser(user);
          if (res.status == 200) {
            Swal.fire({
              icon: "success",
              title: "Datos eliminados",
            }).then(() => {
              setUsers((users) => users.filter((u) => u.id !== user.id));
            });
            setIsLoading(false);
          } else {
            Swal.fire({
              icon: "error",
              title: "No se pudo eliminar los datos",
            });
            setIsLoading(false);
          }
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "No se pudo eliminar los datos",
      });
      setIsLoading(false);
    }
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

  const resetPassword = async (value: any) => {
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if(result.isConfirmed){
        try {
          setIsLoading(false);
          const generatePassword = () => {
            const chars =
              "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let pass = "";
            pass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
            pass += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
            pass += "0123456789"[Math.floor(Math.random() * 10)];
            for (let i = 0; i < 5; i++) {
              pass += chars[Math.floor(Math.random() * chars.length)];
            }
            return pass;
          };
          const suggestedPassword = generatePassword();
          const body = {
            password: suggestedPassword,
          };
          const response = await enagApi.put<UserModel>(
            `/users/reset=${value.id}`,
            body
          );
          if (response.status == 200) {
            value;
            const template = {
              usuario: value.username,
              email: value.email,
              password: suggestedPassword,
            };
            emailjs.init("kDRJ6BHSeB43yKrmT");
            emailjs
              .send("service_8shx8ux", "template_sniu5rb", template)
              .then(() => {
                setIsLoading(false);
                Swal.fire({
                  icon: "success",
                  title: "Los datos se guardaron",
                });
              })
              .catch((err) => {
                setIsLoading(false);
                Swal.fire({
                  icon: "success",
                  title: "No se pudo hacer el reinicio",
                });
              });
          }
        } catch (error) {
          setIsLoading(false);
          Swal.fire({
            icon: "error",
            title: "No se pudo hacer el reinicio",
          });
        }
      }
    });
  };

  const columns: GridColDef<(typeof users)[number]>[] = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "names",
      headerName: "Nombres",
      width: 150,
    },
    {
      field: "last_names",
      headerName: "Apellidos",
      width: 150,
    },
    {
      field: "username",
      headerName: "Nombre de usuario",
      width: 150,
    },
    {
      field: "email",
      headerName: "Correo",
      width: 250,
    },
    {
      field: "rol",
      headerName: "Rol",
      width: 150,
    },
    {
      field: "photo_url",
      headerName: "Foto de usuario",
      width: 250,
      renderCell: (params) => {
        const { row } = params;
        if (row.rol == "ADMIN") {
          return null;
        }
        return (
          <div
            onClick={() => handleDownload(row.photo_url, `${row.username}.png`)}
          >
            <ImageIcon />
            <span>{`${row.username}.png`}</span>
          </div>
        );
      },
    },
    {
      field: "reset",
      headerName: "Reiniciar contraseña",
      width: 150,
      renderCell: (params) => {
        const { row } = params;
        if (row.rol == "ADMIN") {
          return null;
        }
        return (
          <div>
            <Button
              variant="text"
              color="primary"
              onClick={() => resetPassword(params.row)}
            >
              Reset
            </Button>
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
      {isLoading && (
        <Box
          position="absolute"
          display="flex"
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          zIndex={999}
          bgcolor="rgba(255, 255, 255, 0.8)"
        >
          <CircularProgress size={100} color="error" />
        </Box>
      )}
      <Typography component="p" fontSize={22} fontWeight={700}>
        {" "}
        Usuarios{" "}
      </Typography>
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
