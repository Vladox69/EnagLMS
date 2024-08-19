import { enagApi } from "@/apis";
import { CustomDialog } from "@/components/my/CustomDialog";
import { TeacherModel, UserModel } from "@/models";
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
export default function Profile() {
  const [user, setUser] = useState<UserModel>();
  const [isLoading, setIsLoading] = useState(true);
  const [teacher, setTeacher] = useState<TeacherModel>();
  const [ID, setID] = useState(false);
  const [TLD, setTLD] = useState(false);
  const [CV, setCV] = useState(false);
  const getData = async () => {
    try {
      const { data: usr } = await enagApi.get(`/auth/profile`);
      const { data } = await enagApi.get<UserModel>(
        `/users/user_id=${usr.user_id}`
      );
      setUser(data);
      const { data: tch } = await enagApi.get<TeacherModel>(
        `/teachers/teacher_id=${usr.user_id}`
      );
      setTeacher(tch);
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
            <Typography component="p"> Hoja de vida </Typography>
            {!!user ? (
              renderResource(
                "Hoja de vida.pdf",
                teacher?.cv_url || "",
                CV,
                setCV
              )
            ) : (
              <></>
            )}
          </div>
          <div>
            <Typography component="p"> Titulo de tercer nivel </Typography>
            {!!user ? (
              renderResource(
                "Titulo de tercer nivel.pdf",
                teacher?.third_level_degree || "",
                ID,
                setID
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
            >
              Reiniciar contraseña
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
