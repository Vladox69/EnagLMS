import { enagApi } from "@/apis";
import { CustomDialog } from "@/components/my/CustomDialog";
import { StudentModel, TeacherModel, UserModel } from "@/models";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import styles from "@/styles/Custom.module.css";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
export default function Profile() {
  const [user, setUser] = useState<UserModel>();
  const [isLoading, setIsLoading] = useState(true);
  const [student, setStudent] = useState<StudentModel>()
  const [ID, setID] = useState(false);
  const [CV, setCV] = useState(false);
  const getData = async () => {
    try {
      const { data: usr } = await enagApi.get(`/auth/profile`);
      const { data } = await enagApi.get<UserModel>(
        `/users/user_id=${usr.user_id}`
      );
      setUser(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  const renderResource = (
    title: string,
    url: string,
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const handleOpen = () => {
      setState(!state);
    };

    const handleClose = () => {
      setState(!state);
    };

    return (
      <Container
        className={
          styles.hover_effect +
          " container border rounded d-flex justify-content-between"
        }
      >
        <div className="d-flex align-items-center" onClick={handleOpen}>
          <ArticleIcon
            sx={{
              width: 50,
              height: 50,
            }}
          />
          <Typography component="p"> {title} </Typography>
        </div>
        <CustomDialog
          open={state}
          handleClose={handleClose}
          title={title}
          url={url}
        />
      </Container>
    );
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
            emailjs.init('fUTA2N40QEofT2dXW');
            emailjs
              .send("service_g36pyuj","template_j89xm69", template)
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

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {" "}
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
      <Container>
        <form
          action=""
          className="container w-75 d-flex flex-column gap-3 mt-5 mb-5"
        >
          <TextField
            disabled
            type="username"
            variant="outlined"
            label="Nombre de usuario"
            id="username"
            name="username"
            value={user?.username || ""}
          />
          <TextField
            disabled
            type="last_names"
            variant="outlined"
            label="Apellidos"
            id="last_names"
            name="last_names"
            value={user?.last_names || ""}
          />
          <TextField
            disabled
            type="names"
            variant="outlined"
            label="Nombres"
            id="names"
            name="names"
            value={user?.names || ""}
          />
          <div>
            <Typography component="p"> Cédula </Typography>
            {!!user ? (
              renderResource("Cédula.pdf", user.ID_card_url, ID, setID)
            ) : (
              <></>
            )}
          </div>
          <div>
            <Typography component="p"> Certificado de estudios </Typography>
            {!!user ? (
              renderResource(
                "Cetificado de estudios.pdf",
                student?.study_certificate_url || "",
                CV,
                setCV
              )
            ) : (
              <></>
            )}
          </div>
          
          <div>
            <Button
              color="error"
              variant="contained"
              type="submit"
              className="me-2"
              onClick={resetPassword}
            >
              Reiniciar contraseña
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
