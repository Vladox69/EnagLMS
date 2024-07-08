import { enagApi } from "@/apis";
import { SectionModel } from "@/models";
import { newSection } from "@/utils/section/newSection";
import { updateSection } from "@/utils/section/updateSection";
import { Container, Button, TextField, Typography, Box, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import styles from "@/styles/Custom.module.css";
import dynamic from "next/dynamic";
import * as yup from "yup";

interface Props {
  module_id?: number;
  section_id?: number;
}

export const FormSection: FC<Props> = ({ module_id, section_id }) => {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: 0,
    title: "",
    content: "",
    module_id: 0,
  });
  const validateMessage = "Campo obligatorio";
  const validationSchema = yup.object({
    title: yup.string().required(validateMessage),
  });

  useEffect(() => {
    if (!!section_id) {
      getDataSection();
    }
  }, [section_id]);

  const getDataSection = async () => {
    if (!!section_id) {
      const { data } = await enagApi.get<SectionModel>(
        `/sections/section_id=${section_id}`
      );

      setInitialValues({
        id: data.id,
        title: data.title,
        content: data.content,
        module_id: data.module_id,
      });

      setContent(data.content);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema:validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: values.id,
        title: values.title,
        content: content,
        module_id: module_id!,
      };

      let res: any;
      setIsLoading(true);
      if (!!section_id) {
        res = await updateSection(body);
      } else {
        res = await newSection(body);
      }

      if (res.status == 200) {
        setIsLoading(false);
        Swal.fire({
          icon: "success",
          title: "Los datos se guardaron",
        }).then(() => {
          router.push(`/teacher/module/${res.data.module_id}`);
        });
      } else {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "No se pudo guardar los datos",
        }).then(() => {
          router.push(`/teacher/module/${res.data.module_id}`);
        });
      }

      setContent("");
      resetForm();
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
        action=""
        onSubmit={formik.handleSubmit}
        className="container w-75 d-flex flex-column gap-3 mt-5 mb-5"
      >
        <Typography className="" variant="h4">
          Formulario de {section_id == null ? "creación " : "edición"} de
          sección
        </Typography>
        {/* <Typography className='' component='p'>
                    
                </Typography> */}
        <TextField
          type="title"
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
          <Typography className="m-0 " component="p">
            Contenido de la sección
          </Typography>
          <ReactQuill
            theme="snow"
            id="content"
            value={content}
            onChange={setContent}
          />
        </div>
        <div>
          <Button
            className="w-25 text-end me-1"
            color="error"
            variant="contained"
            type="submit"
          >
            Guardar
          </Button>
          <Button
            className={styles.black_button + " w-25 text-end"}
            variant="contained"
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
