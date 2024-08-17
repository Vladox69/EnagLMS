import React, { ChangeEvent, useEffect, useState, FC } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { enagApi } from "@/apis";
import { TeacherModel, UserModel } from "@/models";
import { newTeacher } from "@/utils/admin/teacher/newTeacher";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { CustomDialog } from "@/components/my/CustomDialog";
import { updateTeacher } from "@/utils/admin/teacher/updateTeacher";
import styles from "@/styles/Custom.module.css";
import * as yup from "yup";

interface Props {
  teacher_id?: number;
}

export const FormATeacher: FC<Props> = ({ teacher_id }) => {
  const router = useRouter();

  useEffect(() => {
    getUsers();
    if (teacher_id != undefined) {
      getData();
      setValidationSchema(someValidation);
    } else {
      setValidationSchema(allValidation);
    }
  }, [teacher_id]);

  const goBack = () => {
    router.push("/admin/teachers");
  };
  const [isLoading, setIsLoading] = useState(false);
  const [validationSchema, setValidationSchema] = useState<any>();
  const [initialValues, setInitialValues] = useState({
    id: 0,
    cv_url: "",
    cv_file: null,
    third_level_degree: "",
    third_level_degree_file: null,
    user_id: 0,
  });
  const validateMessage = "Campo obligatorio";
  const allValidation = yup.object({
    user_id: yup.number().required(validateMessage).notOneOf([0]),
    cv_file: yup
      .mixed()
      .required("Se requiere un archivo")
      .test(
        "fileFormat",
        "Formato de archivo no soportado, solo se permiten: pdf",
        (value: any) => {
          return value && ["application/pdf"].includes(value.type);
        }
      ),
    third_level_degree_file: yup
      .mixed()
      .required("Se requiere un archivo")
      .test(
        "fileFormat",
        "Formato de archivo no soportado, solo se permiten: pdf",
        (value: any) => {
          return value && ["application/pdf"].includes(value.type);
        }
      ),
  });
  const someValidation = yup.object({
    user_id: yup.number().required(validateMessage).notOneOf([0]),
  });

  const [CV, setCV] = useState(false);
  const [users, setUsers] = useState<UserModel[]>([]);
  //user
  const [userSelected, setUserSelected] = useState<UserModel>();
  const onCVInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    formik.setFieldValue("cv_file", target.files?.[0]);
  };

  const onThridLevelInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    formik.setFieldValue("third_level_degree_file", target.files?.[0]);
  };

  const handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedUserId = parseInt(event.target.value, 10);
    formik.setFieldValue("user_id", selectedUserId);

    // Buscar el usuario seleccionado en la lista de usuarios
    const selectedUser = users.find((user) => user.id === selectedUserId);
    setUserSelected(selectedUser);
  };

  const getData = async () => {
    try {
      if (teacher_id != undefined) {
        const { data: teacher } = await enagApi.get<TeacherModel>(
          `/teachers/teacher_id=${teacher_id}`
        );
        setInitialValues({
          id: teacher.id,
          cv_url: teacher.cv_url,
          cv_file: null,
          third_level_degree: teacher.third_level_degree,
          third_level_degree_file: null,
          user_id: teacher.user_id,
        });
        const { data: user } = await enagApi.get<UserModel>(
          `/users/user_id=${teacher.user_id}`
        );
        setUserSelected(user);
      }
    } catch (error) {}
  };

  const getUsers = async () => {
    const { data: usr } = await enagApi.get(`/users/user_rol=TEACHER`);
    const { data: tch } = await enagApi.get(`/teachers`);
    
    const uniqueItems = usr.filter(
      (itemA: any) => !tch.some((itemB: any) => itemA.id === itemB.user_id)
    );
    
    if (teacher_id != undefined) {
      const { data: teacher } = await enagApi.get<TeacherModel>(
        `/teachers/teacher_id=${teacher_id}`
      );
      const { data: user } = await enagApi.get(
        `/users/user_id=${teacher.user_id}`
      );
      setUsers([user]);
    } else {
      setUsers(uniqueItems);
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
        cv_url: values.cv_url,
        third_level_degree: values.third_level_degree,
        user_id: values.user_id,
        cv_file: values.cv_file,
        third_level_degree_file: values.third_level_degree_file,
      };

      let res: any;
      setIsLoading(true);
      if (teacher_id != undefined) {
        res = await updateTeacher(body);
      } else {
        res = await newTeacher(body);
      }
      if (res.status == 200) {
        setIsLoading(false);
        Swal.fire({
          icon: "success",
          title: "Los datos se guardaron",
        }).then(() => {
          goBack()
        });
      } else {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "No se pudo guardar los datos",
        }).then(() => {
          goBack()
        });
      }
      resetForm();
    },
  });

  return (
    <Container>
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
          Datos del profesor
        </Typography>
        {teacher_id == undefined && users.length == 0 ? (
            <Typography
              component="p"
              className="text-secondary"
              fontWeight={700}
            >
              No existen usuarios disponibles
            </Typography>
          ) : (
            <></>
          )}
        {teacher_id == undefined && users.length > 0 ? (
          <TextField
            id="user_id"
            select
            name="user_id"
            label="Usuarios"
            variant="outlined"
            value={formik.values.user_id}
            onChange={handleUserChange}
            onBlur={formik.handleBlur}
            error={formik.touched.user_id && Boolean(formik.errors.user_id)}
          >
            <MenuItem value={0}>No seleccionado</MenuItem>
            {users.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.username}
              </MenuItem>
            ))}
          </TextField>
        ) : (
          <></>
        )}
        {userSelected != undefined ? (
          <>
            <TextField
              type="text"
              variant="outlined"
              label="Nombres"
              id="names"
              name="names"
              contentEditable={false}
              value={userSelected?.names}
            />
            <TextField
              type="text"
              variant="outlined"
              label="Apellidos"
              id="names"
              name="lastnames"
              contentEditable={false}
              value={userSelected?.last_names}
            />
            <TextField
              type="text"
              variant="outlined"
              label="Nombre de usuario"
              id="user"
              name="user"
              contentEditable={false}
              value={userSelected?.username}
            />
          </>
        ) : (
          <></>
        )}

        <div>
          <Typography component="p"> Título de tercer grado </Typography>
          <TextField
            type="file"
            variant="outlined"
            id="third_level_degree_file"
            name="third_level_degree_file"
            inputProps={{
              accept: "application/pdf",
            }}
            className="w-100"
            onChange={onCVInputChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.third_level_degree_file &&
              Boolean(formik.errors.third_level_degree_file)
            }
            helperText={
              formik.touched.third_level_degree_file &&
              formik.errors.third_level_degree_file
            }
          />
          {!!teacher_id ? (
            renderResource(
              "Título de tercer grado.pdf",
              formik.values.third_level_degree,
              CV,
              setCV
            )
          ) : (
            <></>
          )}
        </div>
        <div>
          <Typography component="p"> Hoja de vida </Typography>
          <TextField
            type="file"
            variant="outlined"
            id="cv_file"
            name="cv_file"
            inputProps={{
              accept: "application/pdf",
            }}
            // value={formik.values.cv_file}
            className="w-100"
            onChange={onThridLevelInputChange}
            onBlur={formik.handleBlur}
            error={formik.touched.cv_file && Boolean(formik.errors.cv_file)}
            helperText={formik.touched.cv_file && formik.errors.cv_file}
          />
          {!!teacher_id ? (
            renderResource(
              "Hoja de vida.pdf",
              formik.values.cv_url,
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
            className="me-2"
            variant="contained"
            type="submit"
          >
            {" "}
            Guardar{" "}
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={styles.black_button}
            onClick={goBack}
          >
            Cancelar{" "}
          </Button>
        </div>
      </form>
    </Container>
  );
};
