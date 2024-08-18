import { enagApi } from "@/apis";
import { ModuleModel, TeacherModel, UserModel } from "@/models";
import { newModule } from "@/utils/admin/course/module/newModule";
import { updateModule } from "@/utils/admin/course/module/updateModule";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import styles from "@/styles/Custom.module.css";
import * as yup from "yup";
import Swal from "sweetalert2";
import { UserTeacher } from "@/interface/models_combine";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Image from "next/image";
import { CustomDialog } from "@/components/my/CustomDialog";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
interface Props {
  module_id?: number;
  course_id?: number;
}

export const FormAModule: FC<Props> = ({ module_id, course_id }) => {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [validationSchema, setvalidationSchema] = useState<any>();
  useEffect(() => {
    if (module_id != undefined) {
      getData();
      setvalidationSchema(someValidation);
    } else {
      setvalidationSchema(allValidationSchema);
    }
  }, [module_id]);
  useEffect(() => {
    getUsers();
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [initialValues, setInitialValues] = useState({
    id: 0,
    title: "",
    content: "",
    course_id: course_id != undefined ? course_id : 0,
    teacher_id: 0,
    hours: 0,
    img_file: null,
    img_url: "",
    planif_file: null,
    planif: "",
  });
  const [teachers, setTeachers] = useState<TeacherModel[]>([]);
  const [users, setUsers] = useState<UserModel[]>([]);
  const [usersTeachers, setUsersTeachers] = useState<UserTeacher[]>([]);
  const validateMessage = "Campo obligatorio";
  const allValidationSchema = yup.object({
    title: yup.string().required(validateMessage),
    teacher_id: yup
      .number()
      .required(validateMessage)
      .notOneOf([0], validateMessage),
    img_file: yup
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
    title: yup.string().required(validateMessage),
    teacher_id: yup
      .number()
      .required(validateMessage)
      .notOneOf([0], validateMessage),
  });
  const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    formik.setFieldValue("img_file", target.files?.[0]);
  };

  const [CV, setCV] = useState(false);
  const onFilePlanifInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    formik.setFieldValue("planif_file", target.files?.[0]);
  };
  const goBack = () => {
    router.back();
  };

  const getUsers = async () => {
    try {
      const { data: u } = await enagApi.get(`/users/user_rol=TEACHER`);
      setUsers(u);

      const { data: t } = await enagApi.get(`/teachers`);
      setTeachers(t);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const getData = async () => {
    try {
      if (module_id != undefined) {
        const { data: m } = await enagApi.get<ModuleModel>(
          `/modules/module_id=${module_id}`
        );
        setInitialValues({
          id: m.id,
          title: m.title,
          content: m.content,
          course_id: m.course_id,
          teacher_id: m.teacher_id,
          hours: m.hours,
          img_file: null,
          img_url: m.img_url,
          planif: m.planif,
          planif_file: null,
        });
        setContent(m.content);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (!isLoading) {
      buildData();
    }
  }, [isLoading]);
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
  
  const buildData = () => {
    let usersTeacherTemp: UserTeacher[] = [];
    teachers.map((teacher) => {
      const user = users.find((usr) => usr.id == teacher.user_id);
      if (user != undefined) {
        const userTeacher: UserTeacher = {
          user,
          teacher,
        };
        usersTeacherTemp = [...usersTeacherTemp, userTeacher];
      }
    });
    setUsersTeachers(usersTeacherTemp);
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: values.id,
        title: values.title,
        content,
        course_id: values.course_id,
        teacher_id: values.teacher_id,
        hours: values.hours,
        img_file: values.img_file,
        img_url: values.img_url,
      };
      let res: any;
      setIsLoading(true);
      if (module_id != undefined) {
        res = await updateModule(body);
      } else {
        res = await newModule(body);
      }
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
      resetForm();
    },
  });

  return (
    <Container>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
        >
          <CircularProgress size={100} color="error" />
        </Box>
      ) : (
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className=" w-100 d-flex flex-column gap-3 mt-2"
        >
          <Typography component="p" fontSize={22} fontWeight={700}>
            {" "}
            Datos del módulo{" "}
          </Typography>

          <TextField
            type="text"
            variant="outlined"
            label="Título"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <div>
            <Typography component="p">Contenido</Typography>
            <ReactQuill
              theme="snow"
              id="content"
              value={content}
              onChange={setContent}
            />
          </div>
          <div>
            <Typography component="p">Imagen</Typography>
            <TextField
              type="file"
              variant="outlined"
              id="img_file"
              name="img_file"
              className="w-100"
              // value={formik.values.img_file}
              onChange={onFileInputChange}
              onBlur={formik.handleBlur}
              error={formik.touched.img_file && Boolean(formik.errors.img_file)}
              helperText={formik.touched.img_file && formik.errors.img_file}
              inputProps={{
                accept: "image/*",
                multiple: false,
              }}
            />
          </div>
          {!!module_id ? (
            <>
              <Typography component="p">Imagen actual</Typography>
              <Image
                src={formik.values.img_url}
                width={300}
                height={300}
                alt=""
              />
            </>
          ) : (
            <></>
          )}

          <div>
            <Typography component="p">Planificación del módulo</Typography>
            <TextField
              type="file"
              variant="outlined"
              id="planif_file"
              name="planif_file"
              className="w-100"
              // value={formik.values.planif_file}
              onChange={onFilePlanifInputChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.planif_file && Boolean(formik.errors.planif_file)
              }
              helperText={
                formik.touched.planif_file && formik.errors.planif_file
              }
              inputProps={{
                accept: "application/pdf",
              }}
            />
            {!!module_id ? (
              renderResource(
                "Planificación.pdf",
                formik.values.planif,
                CV,
                setCV
              )
            ) : (
              <></>
            )}
          </div>

          <TextField
            id="teacher_id"
            select
            name="teacher_id"
            label="Profesores"
            variant="outlined"
            value={formik.values.teacher_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.teacher_id && Boolean(formik.errors.teacher_id)
            }
          >
            <MenuItem value={0}>No seleccionado</MenuItem>
            {usersTeachers.map((usrtch, index) => (
              <MenuItem key={index} value={usrtch.teacher.id}>
                {usrtch.user.names} {usrtch.user.last_names}
              </MenuItem>
            ))}
          </TextField>
          <div>
            <Button variant="contained" type="submit" color="error">
              {" "}
              Guardar
            </Button>
            <Button
              variant="contained"
              className={styles.black_button + " ms-2"}
              onClick={goBack}
            >
              {" "}
              Cancelar
            </Button>
          </div>
        </form>
      )}
    </Container>
  );
};
