import {
  Box,
  Button,
  CircularProgress,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { editInternCourse } from "@/utils/admin/intern-course/editInternCourse";
import { newInternCourse } from "@/utils/admin/intern-course/newInternCourse";
import { enagApi } from "@/apis";
import { InternCourseModel, TeacherModel } from "@/models";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import styles from "@/styles/Custom.module.css";
import * as yup from "yup";
import Image from "next/image";
interface Props {
  course_id?: number;
}

export const FormInternCourse: FC<Props> = ({ course_id }) => {
  const router = useRouter();
  useEffect(() => {
    if (course_id != undefined&&router.isReady) {
      getData();
      setValidationSchema(someValidation)
    }else{
      setValidationSchema(allValidation)
    }
    getTeachers();
  }, [router.isReady]);
  const goBack = () => {
    router.back();
  };
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: 0,
    title: "",
    content: "",
    start_at: "00:00:00T00:00:00.000z",
    end_at: "00:00:00T00:00:00.000z",
    img_url: "",
    img_file: null,
    teacher_id: 0,
    is_start: false,
  });
  const [content, setContent] = useState("");
  const [teachers, setTeachers] = useState<TeacherModel[]>([]);
  const [validationSchema, setValidationSchema] = useState<any>()
  const validateMessage = "Campo obligatorio";
  const allValidation = yup.object({
    title: yup.string().required(validateMessage),
    start_at:yup.string().required(validateMessage).notOneOf(['00:00:00T00:00:00.000Z'],validateMessage),
    end_at: yup.string()
    .required(validateMessage)
    .notOneOf(['00:00:00T00:00:00.000Z'], validateMessage)
    .test(
      'is-greater',
      'La fecha de fin debe ser mayor o igual a la fecha de inicio',
      function (value) {
        const { start_at } = this.parent;
        return value >= start_at;
      }
    ),
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
    start_at:yup.string().required(validateMessage).notOneOf(['00:00:00T00:00:00.000Z'],validateMessage),
    end_at: yup.string()
    .required(validateMessage)
    .notOneOf(['00:00:00T00:00:00.000Z'], validateMessage)
    .test(
      'is-greater',
      'La fecha de fin debe ser mayor o igual a la fecha de inicio',
      function (value) {
        const { start_at } = this.parent;
        return value >= start_at;
      }
    ),
    teacher_id: yup
      .number()
      .required(validateMessage)
      .notOneOf([0], validateMessage),
  });

  

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const minDate = `${year}-${month}-${day}`;

  const getTeachers = async () => {
    const { data: tch } = await enagApi.get<TeacherModel[]>(`/teachers`);
    setTeachers(tch);
  };

  const getData = async () => {
    if (course_id != undefined&&router.isReady) {
      const { data } = await enagApi.get<InternCourseModel>(
        `/intern_course/course_id=${course_id}`
      );
      setInitialValues({
        id: data.id,
        title: data.title,
        content: data.content,
        start_at: data.start_at
          .toString()
          .slice(0, data.start_at.toString().lastIndexOf("T")),
        end_at: data.end_at
          .toString()
          .slice(0, data.end_at.toString().lastIndexOf("T")),
        img_file: null,
        img_url: data.img_url,
        teacher_id: data.teacher_id,
        is_start: data.is_start,
      });
      setContent(data.content);
    }
  };

  const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    formik.setFieldValue("img_file", target.files?.[0]);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: values.id,
        title: values.title,
        content: content,
        start_at: `${values.start_at}T00:00:00.000z`,
        end_at: `${values.end_at}T00:00:00.000z`,
        img_url: values.img_url,
        img_file: values.img_file,
        teacher_id: values.teacher_id,
        is_start: values.is_start,
      };
      let res: any;
      setIsLoading(true);
      if (course_id != undefined) {
        res = await editInternCourse(body);
      } else {
        res = await newInternCourse(body);
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
          action=""
          onSubmit={formik.handleSubmit}
          className="container w-75 d-flex flex-column gap-3 mt-5 mb-5"
        >
          <Typography variant="h4"> Datos del curso de pasantía</Typography>
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
          />
          <TextField
            type="date"
            variant="outlined"
            label="Fecha de inicio"
            id="start_at"
            name="start_at"
            InputProps={{
              inputProps: { min: minDate }
            }}
            value={formik.values.start_at}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.start_at && Boolean(formik.errors.start_at)}
          />
          <TextField
            type="date"
            variant="outlined"
            label="Fecha de cierre"
            id="end_at"
            name="end_at"
            InputProps={{
              inputProps: { min: formik.values.start_at || minDate }
            }}
            value={formik.values.end_at}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.end_at && Boolean(formik.errors.end_at)}
          />
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
            {teachers.map((teacher) => (
              <MenuItem key={teacher.id} value={teacher.id}>
                {teacher.names} {teacher.last_names}
              </MenuItem>
            ))}
          </TextField>

          <div>
            <Typography component="p">Imagen</Typography>
            <TextField
              type="file"
              variant="outlined"
              id="img_file"
              name="img_file"
              className="w-100"
              onChange={onFileInputChange}
              onBlur={formik.handleBlur}
              error={formik.touched.img_file && Boolean(formik.errors.img_file)}
              helperText={formik.touched.img_file && formik.errors.img_file}
            />
          </div>
          {
            !!course_id?(
              <>
              <Typography component="p">Imagen actual</Typography>
              <Image src={formik.values.img_url} width={300} height={300} alt="" />
              </>
            ):(
              <></>
            )
          }
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
            <Button variant="contained" type="submit" color="error">
              {" "}
              Guardar
            </Button>
            <Button
              variant="contained"
              onClick={goBack}
              className={styles.black_button + " ms-2"}
            >
              {" "}
              Cancelar
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};
