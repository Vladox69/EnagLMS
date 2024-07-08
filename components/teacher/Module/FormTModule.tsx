import React, { ChangeEvent, FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import * as yup from "yup";
import "react-quill/dist/quill.snow.css";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import styles from "@/styles/Custom.module.css";
import { useFormik } from "formik";
import Image from "next/image";
import { enagApi } from "@/apis";
import { useRouter } from "next/router";
import { ModuleModel } from "@/models";
import { updateTeacherModule } from "@/utils/module/updateTeacherModule";
import Swal from "sweetalert2";
interface Props {
  module_id?: number;
}

export const FormTModule: FC<Props> = ({ module_id }) => {
  const router = useRouter();
  const [initialValues, setInitialValues] = useState({
    id: 0,
    title: "",
    content: "",
    img_url: "",
    img_file: null,
    hours:0,
    teacher_id:0,
    course_id:0
  });

  const [content, setContent] = useState("");
  const [validationSchema, setValidationSchema] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const validateMessage = "Campo obligatorio";
  const someValidationSchema = yup.object({
    title: yup.string().required(validateMessage),
  });
  const goBack = () => {
    router.back();
  };
  const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    formik.setFieldValue("img_file", target.files?.[0]);
  };

  const getData = async () => {
    if (module_id != undefined ) {
      const { data } = await enagApi.get<ModuleModel>(
        `/modules/module_id=${module_id}`
      );
      setInitialValues({
        id: data.id,
        content: data.content,
        img_file: null,
        img_url: data.img_url,
        title: data.title,
        course_id:data.course_id,
        hours:data.hours,
        teacher_id:data.teacher_id
      });
      console.log(data);
      setContent(data.content);
    }
  };

  useEffect(() => {
    if (module_id ) {
      setValidationSchema(someValidationSchema);
      getData();
    }
  }, [module_id]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: values.id,
        title: values.title,
        content: content,
        img_url: values.img_url,
        img_file: values.img_file,
        course_id:values.course_id,
        hours:values.hours,
        teacher_id:values.teacher_id
      };
      
      setIsLoading(true)
      const res:any = await updateTeacherModule(body)
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
          action=""
          onSubmit={formik.handleSubmit}
          className="container w-75 d-flex flex-column gap-3 mt-5 mb-5"
        >
          <Typography variant="h4"> Datos del módulo </Typography>
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
          {!!module_id? (
            <>
              <Typography component="p">Imagen actual</Typography>
              <Image
                src={formik.values.img_url}
                width={300}
                height={300}
                alt="Imagen de módulo"
              />
            </>
          ) : (
            <></>
          )}
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
