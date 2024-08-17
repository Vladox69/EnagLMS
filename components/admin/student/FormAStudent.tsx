import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { enagApi } from "@/apis";
import { StudentModel, UserModel } from "@/models";
import { newStudent } from "@/utils/admin/student/newStudent";
import Swal from "sweetalert2";
import { CustomDialog } from "@/components/my/CustomDialog";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { updateStudent } from "@/utils/admin/student/updateStudent";
import styles from "@/styles/Custom.module.css";
import * as yup from "yup";

interface Props {
  student_id?: number;
}

export const FormAStudent: FC<Props> = ({ student_id }) => {
  const router = useRouter();

  useEffect(() => {
    getUsers();
    if (student_id != undefined) {
      getData();
      setvalidationSchema(someValidation);
    } else {
      setvalidationSchema(allValidation);
    }
  }, [student_id]);

  const goBack = () => {
    router.back();
  };
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: 0,
    study_certificate_url: "",
    study_certificate_file: null,
    user_id: 0,
  });
  const [users, setUsers] = useState<UserModel[]>([]);
  const [userSelected, setUserSelected] = useState<UserModel>();
  const [CS, setCS] = useState(false);
  const [validationSchema, setvalidationSchema] = useState<any>();
  const validateMessage = "Campo obligatorio";
  const allValidation = yup.object({
    user_id: yup.number().required(validateMessage).notOneOf([0]),
    study_certificate_file: yup
      .mixed()
      .required("Se requiere un archivo")
      .test(
        "fileFormat",
        "Formato de archivo no soportado, solo se permiten: jpeg, png, gif",
        (value: any) => {
          return value && ["application/pdf"].includes(value.type);
        }
      ),
  });
  const someValidation = yup.object({
    user_id: yup.number().required(validateMessage).notOneOf([0]),
  });

  const onStudyCertificateInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    formik.setFieldValue("study_certificate_file", target.files?.[0]);
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

  const getData = async () => {
    if (student_id != undefined) {
      const { data: student } = await enagApi.get<StudentModel>(
        `/students/student_id=${student_id}`
      );
      setInitialValues({
        id: student.id,
        study_certificate_url: student.study_certificate_url,
        study_certificate_file: null,
        user_id: student.user_id,
      });
      const { data: user } = await enagApi.get(
        `/users/user_id=${student.user_id}`
      );
      setUserSelected(user);
    }
  };

  const getUsers = async () => {
    try {
      const { data: usr } = await enagApi.get(`/users/user_rol=STUDENT`);
      const { data: sts } = await enagApi.get(`/students`);
      const uniqueItems = usr.filter(
        (itemA: any) => !sts.some((itemB: any) => itemA.id === itemB.user_id)
      );
      if (student_id != undefined) {
        const { data: student } = await enagApi.get<StudentModel>(
          `/students/student_id=${student_id}`
        );
        const { data: user } = await enagApi.get(
          `/users/user_id=${student.user_id}`
        );
        setUsers([user]);
      } else {
        setUsers(uniqueItems);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedUserId = parseInt(event.target.value, 10);
    formik.setFieldValue("user_id", selectedUserId);

    // Buscar el usuario seleccionado en la lista de usuarios
    const selectedUser = users.find((user) => user.id === selectedUserId);
    setUserSelected(selectedUser);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: values.id,
        study_certificate_url: values.study_certificate_url,
        study_certificate_file: values.study_certificate_file,
        user_id: values.user_id,
      };

      let res: any;
      setIsLoading(true);
      if (student_id != undefined) {
        res = await updateStudent(body);
      } else {
        res = await newStudent(body);
      }
      if (res.status == 200) {
        Swal.fire({
          icon: "success",
          title: "Los datos se guardaron",
        }).then(() => {
          router.back();
        });
      } else {
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
      <Container>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="container w-75 d-flex flex-column gap-3 mt-5 mb-5"
        >
          <Typography component="p" fontSize={22} fontWeight={700}>
            {" "}
            Datos del estudiante
          </Typography>
          {student_id == undefined && users.length == 0 ? (
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
          {student_id == undefined && users.length > 0 ? (
            <TextField
              id="user_id"
              select
              name="user_id"
              label="Estudiantes"
              variant="outlined"
              value={formik.values.user_id}
              onChange={handleUserChange}
              onBlur={formik.handleBlur}
              error={formik.touched.user_id && Boolean(formik.errors.user_id)}
            >
              <MenuItem value={0}>No seleccionado</MenuItem>
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.names} {user.last_names}
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
            <Typography component="p"> Certificado de estudios </Typography>
            <TextField
              type="file"
              variant="outlined"
              id="study_certificate_file"
              name="study_certificate_file"
              className="w-100"
              inputProps={{
                accept: "application/pdf",
              }}
              onChange={onStudyCertificateInputChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.study_certificate_file &&
                Boolean(formik.errors.study_certificate_file)
              }
              helperText={
                formik.touched.study_certificate_file &&
                formik.errors.study_certificate_file
              }
            />
            {!!student_id ? (
              renderResource(
                "Certificado de estudio.pdf",
                formik.values.study_certificate_url,
                CS,
                setCS
              )
            ) : (
              <></>
            )}
          </div>
          <div>
            <Button color="error" variant="contained" type="submit">
              {" "}
              Guardar{" "}
            </Button>
            <Button
              variant="contained"
              className={styles.black_button + " ms-2"}
              onClick={goBack}
            >
              {" "}
              Cancelar{" "}
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};
