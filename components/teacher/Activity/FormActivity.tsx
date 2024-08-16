import React, { FC, useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { enagApi } from "@/apis";
import { ActivityModel } from "@/models";
import { useFormik } from "formik";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { updateActivity } from "@/utils/activity/updateActivity";
import { newActivity } from "@/utils/activity/newActivity";
import styles from "@/styles/Custom.module.css";
import dynamic from "next/dynamic";
import * as yup from "yup";

interface Props {
  section_id?: number;
  activity_id?: number;
}

export const FormActivity: FC<Props> = ({ section_id, activity_id }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");
  const [maxPonderation, setMaxPonderation] = useState(10);
  const [initialValues, setInitialValues] = useState({
    id: 0,
    title: "",
    content: "",
    time_due: "00:00:00T00:00:00.000Z",
    section_id: section_id,
    ponderation: 0.1,
  });
  const validateMessage = "Campo obligatorio";
  const validationSchema = yup.object({
    title: yup.string().required(validateMessage),
    time_due: yup
      .string()
      .required(validateMessage)
      .notOneOf(["00:00:00T00:00:00.000Z"], validateMessage),
  });

  useEffect(() => {
    getMaxPonderation();
  }, []);

  useEffect(() => {
    if (!!activity_id) {
      getDataActivity();
    }
  }, [activity_id]);

  const getDataActivity = async () => {
    if (!!activity_id) {
      const { data } = await enagApi.get<ActivityModel>(
        `/activities/activity_id=${activity_id}`
      );
      setInitialValues({
        id: data.id,
        title: data.title,
        content: data.content,
        time_due: data.time_due
          .toString()
          .slice(0, data.time_due.toString().lastIndexOf("T")),
        section_id: data.section_id,
        ponderation: data.ponderation,
      });
      setContent(data.content);
    }
  };

  const getMaxPonderation = async () => {
    let sec_id = section_id;
    if (activity_id !== undefined) {
      const { data: act } = await enagApi.get<ActivityModel>(
        `/activities/activity_id=${activity_id}`
      );
      sec_id = act.section_id;
    }
    const { data: sect } = await enagApi.get<ActivityModel[]>(
      `/activities/section_id=${sec_id}`
    );
    let sumPonderation = 0;
    sect.forEach((element) => {
      sumPonderation = sumPonderation + element.ponderation;
    });
    const newPonderation = maxPonderation - sumPonderation;
    setMaxPonderation(newPonderation);
  };

  const goBack = () => {
    router.back();
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
        time_due: `${values.time_due}T00:00:00.000z`,
        section_id: section_id!,
        ponderation: values.ponderation,
      };

      let res: any;
      setIsLoading(true)
      if (activity_id != undefined) {
        res = await updateActivity(body);
      } else {
        res = await newActivity(body);
      }
      if (res.status == 200) {
        setIsLoading(false)
        Swal.fire({
          icon: "success",
          title: "Los datos se guardaron",
        }).then(() => {
          router.back();
        });
      } else {
        setIsLoading(false)
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
          onSubmit={formik.handleSubmit}
          className="container w-75 d-flex flex-column gap-3"
        >
          <Typography component="p"  fontSize={22} fontWeight={700} className="">
            Formulario de{" "}
            {activity_id != undefined ? " edición " : " creación "} de actividad{" "}
          </Typography>
          <TextField
            type="text"
            variant="outlined"
            label="Title"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />

          <TextField
            type="date"
            variant="outlined"
            label="Fecha límite de entrega"
            id="time_due"
            name="time_due"
            value={formik.values.time_due}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.time_due && Boolean(formik.errors.time_due)}
            helperText={formik.touched.time_due && formik.errors.time_due}
          />

          <TextField
            type="number"
            variant="outlined"
            label="Ponderación"
            id="ponderation"
            name="ponderation"
            inputProps={{
              min: 0.1,
              max: maxPonderation,
              step: 0.1,
            }}
            value={formik.values.ponderation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.ponderation && Boolean(formik.errors.ponderation)
            }
            helperText={formik.touched.ponderation && formik.errors.ponderation}
          />

          <div>
            <Typography className="fw-bold">
              Contenido de la actividad{" "}
            </Typography>
            <ReactQuill
              theme="snow"
              id="content"
              value={content}
              onChange={setContent}
            />
          </div>

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
      </Container>
    </>
  );
};
