import { newCourse } from "@/utils/admin/course/newCourse";
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  CircularProgress,
  Divider,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, FC, useState, ChangeEvent } from "react";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import styles from "@/styles/Custom.module.css";
import { enagApi } from "@/apis";
import { CourseModel } from "@/models";
import { editCourse } from "@/utils/admin/course/editCourse";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import * as yup from "yup";
import Image from "next/image";

interface Props {
  course_id?: number;
}

export const FormACourse: FC<Props> = ({ course_id }) => {
  const router = useRouter();

  useEffect(() => {
    if (course_id != undefined) {
      getData();
      setvalidationSchema(someValidationSchema);
    } else {
      setvalidationSchema(allValidationSchema);
    }
  }, [course_id]);

  const goBack = () => {
    router.back();
  };
  const [validationSchema, setvalidationSchema] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: 0,
    topic: "",
    content: "",
    start_at: "00:00:00T00:00:00.000Z",
    end_at: "00:00:00T00:00:00.000Z",
    modality: "",
    objective: "",
    periods: 0,
    qualification: "",
    requirements: "",
    type: "no",
    visible: true,
    img_file: null,
    img_url: "",
    is_start: false,
  });
  const [content, setContent] = useState("");
  const [requirements, setRequirements] = useState("");
  const validateMessage = "Campo obligatorio";
  const allValidationSchema = yup.object({
    topic: yup.string().required(validateMessage),
    objective: yup.string().required(validateMessage),
    qualification: yup.string().required(validateMessage),
    type: yup
      .string()
      .required(validateMessage)
      .notOneOf(["no"], validateMessage),
    start_at: yup
      .string()
      .required(validateMessage)
      .notOneOf(["00:00:00T00:00:00.000Z"], validateMessage),
    end_at: yup
      .string()
      .required(validateMessage)
      .notOneOf(["00:00:00T00:00:00.000Z"], validateMessage)
      .test(
        "is-greater",
        "La fecha de fin debe ser mayor o igual a la fecha de inicio",
        function (value) {
          const { start_at } = this.parent;
          return value >= start_at;
        }
      ),
    periods: yup
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
  const someValidationSchema = yup.object({
    topic: yup.string().required(validateMessage),
    objective: yup.string().required(validateMessage),
    qualification: yup.string().required(validateMessage),
    type: yup
      .string()
      .required(validateMessage)
      .notOneOf(["no"], validateMessage),
    start_at: yup
      .string()
      .required(validateMessage)
      .notOneOf(["00:00:00T00:00:00.000Z"], validateMessage),
    end_at: yup
      .string()
      .required(validateMessage)
      .notOneOf(["00:00:00T00:00:00.000Z"], validateMessage)
      .test(
        "is-greater",
        "La fecha de fin debe ser mayor o igual a la fecha de inicio",
        function (value) {
          const { start_at } = this.parent;
          return value >= start_at;
        }
      ),
    periods: yup
      .number()
      .required(validateMessage)
      .notOneOf([0], validateMessage),
  });

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const minDate = `${year}-${month}-${day}`;

  const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    formik.setFieldValue("img_file", target.files?.[0]);
  };

  const getData = async () => {
    setIsLoading(true)
    try {
      if (course_id != undefined) {
        const { data } = await enagApi.get<CourseModel>(
          `/courses/course_id=${course_id}`
        );
        setInitialValues({
          id: data.id,
          topic: data.topic,
          content: data.content,
          start_at: data.start_at
            .toString()
            .slice(0, data.start_at.toString().lastIndexOf("T")),
          end_at: data.end_at
            .toString()
            .slice(0, data.end_at.toString().lastIndexOf("T")),
          modality: data.modality,
          objective: data.objective,
          periods: data.periods,
          qualification: data.qualification,
          requirements: data.requirements,
          type: data.type,
          visible: data.visible,
          img_file: null,
          img_url: data.img_url,
          is_start: data.is_start,
        });
        setContent(data.content);
        setRequirements(data.requirements);
        setIsLoading(false)
      }
    } catch (error) {

      setIsLoading(false)
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      const body = {
        id: values.id,
        topic: values.topic,
        content: content,
        start_at: `${values.start_at}T00:00:00.000Z`,
        end_at: `${values.end_at}T00:00:00.000Z`,
        modality: values.modality,
        objective: values.objective,
        periods: values.periods,
        qualification: values.qualification,
        requirements: requirements,
        type: values.type,
        visible: Boolean(values.visible),
        img_file: values.img_file,
        img_url: values.img_url,
        is_start: values.is_start,
      };
      let res: any;
      setIsLoading(true);
      if (course_id != undefined) {
        res = await editCourse(body);
      } else {
        res = await newCourse(body);
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
          <Typography component="p"  fontSize={24} fontWeight={700}> Datos del curso </Typography>
          <TextField
            type="text"
            variant="outlined"
            label="Título"
            id="topic"
            name="topic"
            value={formik.values.topic}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.topic && Boolean(formik.errors.topic)}
            helperText={formik.touched.topic && formik.errors.topic}
          />
          <TextField
            type="date"
            variant="outlined"
            id="start_at"
            name="start_at"
            label="Fecha de inicio"
            InputProps={{
              inputProps: { min: minDate },
            }}
            value={formik.values.start_at}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.start_at && Boolean(formik.errors.start_at)}
            helperText={formik.touched.start_at && formik.errors.start_at}
          />
          <TextField
            type="date"
            variant="outlined"
            id="end_at"
            name="end_at"
            label="Fecha de cierre"
            InputProps={{
              inputProps: { min: formik.values.start_at || minDate },
            }}
            value={formik.values.end_at}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.end_at && Boolean(formik.errors.end_at)}
            helperText={formik.touched.end_at && formik.errors.end_at}
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
          <Divider />
          <TextField
            type="text"
            variant="outlined"
            id="qualification"
            name="qualification"
            label="Titulación"
            value={formik.values.qualification}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.qualification &&
              Boolean(formik.errors.qualification)
            }
            helperText={
              formik.touched.qualification && formik.errors.qualification
            }
          />
          <TextField
            type="number"
            variant="outlined"
            id="periods"
            name="periods"
            label="Periodos"
            value={formik.values.periods}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.periods && Boolean(formik.errors.periods)}
            helperText={formik.touched.periods && formik.errors.periods}
          />
          <TextField
            type="text"
            variant="outlined"
            id="objective"
            name="objective"
            multiline
            rows={4}
            label="Objetivo"
            value={formik.values.objective}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.objective && Boolean(formik.errors.objective)}
            helperText={formik.touched.objective && formik.errors.objective}
          />

          <TextField
            id="type"
            select
            name="type"
            label="Tipo"
            variant="outlined"
            value={formik.values.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.type && Boolean(formik.errors.type)}
          >
            <MenuItem value="no">No seleccionado</MenuItem>
            <MenuItem value="short">Corto</MenuItem>
            <MenuItem value="large">Largo</MenuItem>
            <MenuItem value="master class">Master Class</MenuItem>
          </TextField>

          <TextField
            id="visible"
            select
            name="visible"
            label="Visible"
            variant="outlined"
            value={formik.values.visible}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.visible && Boolean(formik.errors.visible)}
          >
            <MenuItem value="true">Visible</MenuItem>
            <MenuItem value="false">No visible</MenuItem>
          </TextField>

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
          {!!course_id ? (
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
            <Typography component="p">Requerimientos</Typography>
            <ReactQuill
              theme="snow"
              id="requirements"
              value={requirements}
              onChange={setRequirements}
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
