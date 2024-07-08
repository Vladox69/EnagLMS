import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import styles from "@/styles/Custom.module.css";
import { enagApi } from "@/apis";
import * as yup from "yup";
import Swal from "sweetalert2";

export const LoginForm = () => {
  const router = useRouter();
  const [initialValues, setInitialValues] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const validateMessage = "Campo obligatorio";
  const allValidationSchema = yup.object({
    username: yup.string().required(validateMessage),
    password: yup.string().required(validateMessage),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: allValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        const body = {
          username: values.username,
          password: values.password,
        };
        setIsLoading(true);
        const data = await enagApi.post(`/auth/login`, body);
        if (data.status == 200) {
          const { data: user } = await enagApi.get(`/auth/profile`);
          setIsLoading(false);
          switch (user.rol) {
            case "ADMIN":
              router.push("/admin");
              break;
            case "STUDENT":
              router.push("/my");
              break;
            case "TEACHER":
              router.push("/teacher");
              break;
            default:
              break;
          }
        } else {
          setIsLoading(true);
          Swal.fire({
            icon: "warning",
            title: "Usuario o contraseña incorrectas",
          });
        }
      } catch (error) {
        setIsLoading(false);
        Swal.fire({
          icon: "warning",
          title: "Usuario o contraseña incorrectas",
        });
      }
    },
  });

  const goBack = () => {
    router.back();
  };

  return (
    <>
      {isLoading && (
        <Box
          position="absolute"
          display="flex"
          width="100%"
          height="100vh"
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
          onSubmit={formik.handleSubmit}
          className="container w-75 d-flex flex-column gap-3 mt-5 mb-5"
        >
          <Typography variant="h4">Inicio de sesión</Typography>
          <TextField
            type="text"
            variant="outlined"
            label="Usuario"
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            type="password"
            variant="outlined"
            label="Contraseña"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <div>
            <Button
              color="error"
              variant="contained"
              type="submit"
              className="me-2"
            >
              INGRESAR
            </Button>
            <Button
              variant="contained"
              className={styles.black_button}
              onClick={goBack}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};
