import { useRouter } from "next/router";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { CustomDialog } from "@/components/my/CustomDialog";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { newUser } from "@/utils/admin/user/newUser";
import Swal from "sweetalert2";
import { enagApi } from "@/apis";
import { UserModel } from "@/models";
import { updateUser } from "@/utils/admin/user/updateUser";
import styles from "@/styles/Custom.module.css";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
import DownloadIcon from '@mui/icons-material/Download';
import { handleDownload } from "@/utils/file/handleDownload";
interface Props {
  user_id?: number;
}

export const FormAUser: FC<Props> = ({ user_id }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const [validationSchema, setValidationSchema] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: 0,
    username: "",
    password: "",
    email: "",
    rol: "no",
    photo_url: "",
    photo_file: null,
  });
  
  const validateMessage = "Campo obligatorio";
  const allValidation = yup.object({
    username: yup
      .string()
      .required(validateMessage)
      .test(
        "checkUsernameExists",
        "El nombre de usuario ya existe",
        async (value) => {
          if (!value) return true;
          const exists = await checkUsernameExists(value);
          return !exists;
        }
      ),
    password: yup
      .string()
      .required(validateMessage)
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(/[A-Z]/, "La contraseña debe tener al menos una letra mayúscula")
      .matches(/[a-z]/, "La contraseña debe tener al menos una letra minúscula")
      .matches(/[0-9]/, "La contraseña debe tener al menos un número"),
    email: yup.string().required(validateMessage).email(),
    rol: yup
      .string()
      .required(validateMessage)
      .notOneOf(["no", "Debe seleccionar un rol"]),
    photo_file: yup
      .mixed()
      .required("Se requiere un archivo")
      .test(
        "fileFormat",
        "Formato de archivo no soportado, solo se permiten: jpeg, png, gif",
        (value: any) => {
          return (
            value &&
            ["image/jpeg", "image/png", "image/gif"].includes(value.type)
          );
        }
      ),
  });
  const someValidation = yup.object({
    password: yup
      .string()
      .required(validateMessage)
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(/[A-Z]/, "La contraseña debe tener al menos una letra mayúscula")
      .matches(/[a-z]/, "La contraseña debe tener al menos una letra minúscula")
      .matches(/[0-9]/, "La contraseña debe tener al menos un número"),
    email: yup.string().required(validateMessage).email(),
    rol: yup
      .string()
      .required(validateMessage)
      .notOneOf(["no", "Debe seleccionar un rol"]),
  });

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const onPhotoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    formik.setFieldValue("photo_file", target.files?.[0]);
  };

  const downloadImage=()=>{
    handleDownload(initialValues.photo_url,`${initialValues.username}.png`)
  }

  useEffect(() => {
    if (user_id != undefined) {
      getData();
      setValidationSchema(someValidation);
    } else {
      setValidationSchema(allValidation);
    }
  }, [user_id]);

  const getData = async () => {
    const { data } = await enagApi.get<UserModel>(`/users/user_id=${user_id}`);
    setInitialValues({
      id: data.id,
      username: data.username,
      password: data.password,
      email: data.email,
      rol: data.rol,
      photo_url: data.photo_url,
      photo_file: null,
    });
  };

  const checkUsernameExists = async (username: string) => {
    const response = await enagApi.get(`users/username=${username}`);
    return response.data;
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
      <p onClick={handleOpen}>
        <PictureAsPdfIcon />
        <span>{title}</span>
        <CustomDialog
          open={state}
          handleClose={handleClose}
          title={title}
          url={url}
        />
      </p>
    );
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: values.id,
        username: values.username,
        password: values.password,
        email: values.email,
        rol: values.rol,
        photo_url: values.photo_url,
        photo_file: values.photo_file,
      };

      let res: any;
      setIsLoading(true);
      if (user_id != undefined) {
        res = await updateUser(body);
      } else {
        res = await newUser(body);
      }
      if (res.status == 200) {
        setIsLoading(false);
        Swal.fire({
          icon: "success",
          title: "Los datos se guardaron",
        }).then(() => {
          router.back();
        });
      } else {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "No se pudo guardar los datos",
        }).then(() => {
          router.back();
        });
      }
      resetForm();
    },
  });

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
      <form
        action=""
        onSubmit={formik.handleSubmit}
        className="container w-75 d-flex flex-column gap-3 mt-5 mb-5"
      >
        <Typography className="" variant="h4">
          Formulario de {user_id == null ? "creación " : "edición"} de usuarios
        </Typography>
        <TextField
          type="text"
          variant="outlined"
          label="Nombre de usuario"
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          type="email"
          variant="outlined"
          label="Correo electrónico"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          type={showPassword ? "text" : "password"}
          variant="outlined"
          label="Contraseña"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div>
          <Typography component="p"> Foto de perfil </Typography>
          <TextField
            type="file"
            variant="outlined"
            id="photo_file"
            name="photo_file"
            className="w-100"
            inputProps={{
              accept: "image/jpeg, image/png, image/gif",
            }}
            onChange={onPhotoInputChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.photo_file && Boolean(formik.errors.photo_file)
            }
            helperText={formik.touched.photo_file && formik.errors.photo_file}
          />
        </div>

        {!!user_id ? (
          <>
            <Typography component="p">Imagen actual</Typography>
            <Box position="relative" display="inline-block">
              <Image
                src={formik.values.photo_url}
                width={300}
                height={300}
                alt=""
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  color: "white", 
                }}
                onClick={downloadImage}
              >
                <DownloadIcon color="error" />
              </IconButton>
            </Box>
          </>
        ) : (
          <></>
        )}
        {user_id == undefined ? (
          <TextField
            id="rol"
            select
            name="rol"
            label="Rol"
            variant="outlined"
            value={formik.values.rol}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.rol && Boolean(formik.errors.rol)}
          >
            <MenuItem value="no">No seleccionado</MenuItem>
            <MenuItem value="TEACHER">PROFESOR</MenuItem>
            <MenuItem value="STUDENT">ESTUDIANTE</MenuItem>
          </TextField>
        ) : (
          <></>
        )}

        <div>
          <Button color="error" variant="contained" type="submit">
            {" "}
            Guardar{" "}
          </Button>
          <Button
            className={styles.black_button + " ms-2"}
            variant="contained"
            onClick={goBack}
          >
            {" "}
            Cancelar{" "}
          </Button>
        </div>
      </form>
    </>
  );
};
