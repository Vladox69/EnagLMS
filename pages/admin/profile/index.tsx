import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material";
import { enagApi } from "@/apis";
import { UserModel } from "@/models";

export default function Profile() {
  const [user, setUser] = useState<UserModel>();
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    getData();
  }, []);
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
