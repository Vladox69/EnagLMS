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
import DownloadIcon from "@mui/icons-material/Download";
import { handleDownload } from "@/utils/file/handleDownload";
import emailjs from "emailjs-com";
interface Props {
  user_id?: number;
}

export const FormAUser: FC<Props> = ({ user_id }) => {
  const router = useRouter();

  const goBack = () => {
    router.push("/admin/users");
  };

  const [validationSchema, setValidationSchema] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [ID, setID] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: 0,
    username: "",
    password: "",
    email: "",
    rol: "no",
    photo_url: "",
    photo_file: null,
    names: "",
    last_names: "",
    ID_card_url: "",
    id_card_file: null,
  });

  const validateMessage = "Campo obligatorio";
  const allValidation = yup.object({
    names: yup.string().required(validateMessage),
    last_names: yup.string().required(validateMessage),
    id_card_file: yup
      .mixed()
      .required("Se requiere un archivo")
      .test(
        "fileFormat",
        "Formato de archivo no soportado, solo se permiten: jpeg, png, gif",
        (value: any) => {
          return value && ["application/pdf"].includes(value.type);
        }
      ),
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

  const downloadImage = () => {
    handleDownload(initialValues.photo_url, `${initialValues.username}.png`);
  };

  const onIdCardInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    formik.setFieldValue("id_card_file", target.files?.[0]);
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

  useEffect(() => {
    if (user_id != undefined) {
      getData();
      setValidationSchema(someValidation);
    } else {
      setValidationSchema(allValidation);
    }
  }, [user_id]);

  const getData = async () => {
    try {
      const { data } = await enagApi.get<UserModel>(
        `/users/user_id=${user_id}`
      );
      setInitialValues({
        id: data.id,
        username: data.username,
        password: data.password,
        email: data.email,
        rol: data.rol,
        photo_url: data.photo_url,
        photo_file: null,
        last_names: data.last_names,
        names: data.names,
        id_card_file: null,
        ID_card_url: data.ID_card_url,
      });
    } catch (error) {}
  };

  const checkUsernameExists = async (username: string) => {
    const response = await enagApi.get(`users/username=${username}`);
    return response.data;
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: values.id,
        username: values.username,
        last_names: values.last_names,
        names: values.names,
        password: values.password,
        email: values.email,
        rol: values.rol,
        id_card_file: values.id_card_file,
        ID_card_url: values.ID_card_url,
        photo_url: values.photo_url,
        photo_file: values.photo_file,
      };

      let res: any;
      setIsLoading(true);
      if (user_id != undefined) {
        res = await updateUser(body);
        if (res.status == 200) {
          setIsLoading(false);
          Swal.fire({
            icon: "success",
            title: "Los datos se guardaron",
          }).then(() => {
            goBack();
          });
        } else {
          setIsLoading(false);
          Swal.fire({
            icon: "error",
            title: "No se pudo guardar los datos",
          }).then(() => {
            goBack();
          });
        }
      } else {
        res = await newUser(body);
        if (res.status == 200) {
          const template = {
            usuario: values.username,
            email: values.email,
            password: values.password,
          };
          emailjs.init("kDRJ6BHSeB43yKrmT");
          emailjs
            .send("service_8shx8ux", "template_sniu5rb", template)
            .then(() => {
              setIsLoading(false);
              Swal.fire({
                icon: "success",
                title: "Los datos se guardaron",
              }).then(() => {
                goBack();
              });
            })
            .catch((err) => {
              setIsLoading(false);
              Swal.fire({
                icon: "success",
                title: "No se pudo enviar el correo",
              }).then(() => {
                goBack();
              });
            });
        } else {
          setIsLoading(false);
          Swal.fire({
            icon: "error",
            title: "No se pudo guardar los datos",
          }).then(() => {
            goBack();
          });
        }
      }

      resetForm();
    },
  });

  useEffect(() => {
    const { names, last_names, username, password } = formik.values;

    // Verifica que no haya un `user_id` y que el campo `username` esté vacío
    if (!user_id && names && last_names && !username) {
      const nameParts = names.split(" ");
      const firstLetter = nameParts[0]?.[0]?.toLowerCase() || "";
      const secondLetter = nameParts[1]?.[0]?.toLowerCase() || "";
      const lastName = last_names.split(" ")[0].toLowerCase();

      const suggestedUsername = `${firstLetter}${secondLetter}${lastName}`;

      // Establece el nombre de usuario sugerido solo si está vacío
      if (!formik.values.username) {
        formik.setFieldValue("username", suggestedUsername);
      }
    }

    if (!user_id && !password) {
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

      // Establece la contraseña sugerida solo si el campo está vacío
      if (!formik.values.password) {
        formik.setFieldValue("password", suggestedPassword);
      }
    }
  }, [
    formik.values.names,
    formik.values.last_names,
    formik.values.password,
    formik,
    user_id,
  ]);

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
        <Typography className="" component="p" fontSize={22} fontWeight={700}>
          Formulario de {user_id == null ? "creación " : "edición"} de usuarios
        </Typography>
        <TextField
          type="text"
          variant="outlined"
          label="Nombres"
          id="names"
          name="names"
          value={formik.values.names}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.names && Boolean(formik.errors.names)}
          helperText={formik.touched.names && formik.errors.names}
        />
        <TextField
          type="text"
          variant="outlined"
          label="Apellidos"
          id="last_names"
          name="last_names"
          value={formik.values.last_names}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.last_names && Boolean(formik.errors.last_names)}
          helperText={formik.touched.last_names && formik.errors.last_names}
        />
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

        {/* <TextField
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
        /> */}
        
        {user_id == undefined ? (
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
        ) : (
          <></>
        )}

        <div>
          <Typography component="p"> Cédula </Typography>
          <TextField
            type="file"
            variant="outlined"
            id="id_card_file"
            name="id_card_file"
            className="w-100"
            inputProps={{
              accept: "application/pdf",
            }}
            onChange={onIdCardInputChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.id_card_file && Boolean(formik.errors.id_card_file)
            }
            helperText={
              formik.touched.id_card_file && formik.errors.id_card_file
            }
          />
          {!!user_id ? (
            renderResource("Cédula.pdf", formik.values.ID_card_url, ID, setID)
          ) : (
            <></>
          )}
        </div>
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
            <MenuItem value="ADMIN">ADMIN</MenuItem>
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
