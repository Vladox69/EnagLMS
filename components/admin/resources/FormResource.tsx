import { enagApi } from "@/apis";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import Swal from "sweetalert2";
import * as yup from "yup";
import styles from "@/styles/Custom.module.css";
import { newResource } from "@/utils/resources/newResource";

export const FormResource = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: 0,
    title: "",
    description: "",
    photo_file: null,
    url_resource: "",
  });
  const [option, setOption] = useState("image");
  const onPhotoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    formik.setFieldValue("photo_file", target.files?.[0]);
  };
  const validateMessage = "Campo obligatorio";
  const validationSchema = yup.object({
    title: yup.string().required(validateMessage),
    description: yup.string().required(validateMessage),
  });
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    // validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: values.id,
        photo_file: values.photo_file,
        title: values.title,
        description: values.description,
        url_resource: values.url_resource,
        type: option,
      };
      let res: any;
      setIsLoading(true);
      res = await newResource(body);
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
          onSubmit={formik.handleSubmit}
          className="container w-75 d-flex flex-column gap-3"
        >
          <Typography className="" variant="h4">
            Formulario de recurso
          </Typography>

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Tipo de recurso
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="image"
                control={<Radio />}
                label="Imagen"
                onClick={() => {
                  setOption("image");
                }}
              />
              <FormControlLabel
                value="video"
                control={<Radio />}
                label="Video"
                onClick={() => {
                  setOption("video");
                }}
              />
            </RadioGroup>
          </FormControl>

          {option == "image" ? (
            <>
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
              <TextField
                type="text"
                variant="outlined"
                label="Descripción"
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
              <div>
                <Typography component="p">Imagen </Typography>
                <TextField
                  type="file"
                  variant="outlined"
                  id="photo_url"
                  name="photo_url"
                  className="w-100"
                  inputProps={{
                    accept: "image/jpeg, image/png, image/gif",
                  }}
                  onChange={onPhotoInputChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.url_resource &&
                    Boolean(formik.errors.url_resource)
                  }
                  helperText={
                    formik.touched.url_resource && formik.errors.url_resource
                  }
                />
              </div>
            </>
          ) : (
            <>
              <TextField
                type="text"
                variant="outlined"
                label="URL del video"
                id="url_resource"
                name="url_resource"
                value={formik.values.url_resource}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.url_resource &&
                  Boolean(formik.errors.url_resource)
                }
                helperText={
                  formik.touched.url_resource && formik.errors.url_resource
                }
              />
            </>
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
      </Container>
    </>
  );
};
