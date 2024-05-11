import { enagApi } from "@/apis";
import { ActivityInternModel } from "@/models";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import styles from "@/styles/Custom.module.css";
import dynamic from "next/dynamic";
import { updateInternActivity } from "@/utils/intern-activity/updateInternActivity";
import { newInternActivity } from "@/utils/intern-activity/newInternActivity";
import Swal from "sweetalert2";

interface Props {
  course_id?: number;
  activity_id?: number;
}

export const FormInternActivity: FC<Props> = ({ activity_id, course_id }) => {
  const router = useRouter();

  useEffect(() => {
    if (!!activity_id) {
      getData();
    }
  }, [activity_id]);

  const [initialValues, setInitialValues] = useState({
    id: 0,
    title: "",
    content: "",
    course_id: course_id,
  });
  const [content, setContent] = useState("");

  const goBack = () => {
    router.back();
  };

  const getData = async () => {
    if (!!activity_id) {
      const { data } = await enagApi.get<ActivityInternModel>(
        `/intern_activity/activity_id=${activity_id}`
      );
      setInitialValues({
        id: data.id,
        title: data.title,
        content: data.content,
        course_id: data.course_id,
      });
      setContent(data.content);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: values.id,
        title: values.title,
        content: content,
        course_id: course_id,
      };
      let res: any;
      if (activity_id != undefined) {
        res = await updateInternActivity(body);
      } else {
        res = await newInternActivity(body);
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
    <Container>
      <form
        action=""
        onSubmit={formik.handleSubmit}
        className="container w-75 d-flex flex-column gap-3"
      >
        <Typography variant="h5" className="">
          Formulario de {activity_id != undefined ? " edición " : " creación "}{" "}
          de actividad{" "}
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
  );
};
