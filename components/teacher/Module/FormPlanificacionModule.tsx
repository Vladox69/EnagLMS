import { enagApi } from "@/apis";
import { ModuleResourceModel } from "@/models";
import { Box, Button, CircularProgress, Container, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import styles from "@/styles/Custom.module.css";
import { uploadFile } from "@/utils";
import * as yup from "yup";
interface Props {
  module_id: number;
  onSubmitResource: (formData: any) => void;
  onCancel: () => void;
}

export const FormPlanificacionModule: FC<Props> = ({
  module_id,
  onCancel,
  onSubmitResource,
}) => {
  useEffect(() => {
    if (module_id != undefined) {
      getData();
    }
  }, [module_id]);
  const [resource, setResource] = useState<ModuleResourceModel>();
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: 0,
    url_resource: "",
    img_file: null,
    module_id,
    title: "",
  });
  const allValidationSchema = yup.object({
    img_file: yup
    .mixed()
    .required("Se requiere un archivo")
    .test(
      "fileFormat",
      "Formato de archivo no soportado, solo se permiten: pdf",
      (value: any) => {
        return (
          value &&
          ["application/pdf"].includes(value.type)
        );
      }
    ),
  });
  const getData = async () => {
    if (module_id != undefined) {
      const { data: mr } = await enagApi.get<ModuleResourceModel[]>(
        `/modules/resources/module_id=${module_id}`
      );
      if (mr.length != 0) {
        const data = mr[0];
        setInitialValues({
          id: data.id,
          img_file: null,
          module_id: data.module_id,
          title: data.title,
          url_resource: data.url_resource,
        });
      }
    }
  };
  const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length === 0) return;
    formik.setFieldValue("img_file", target.files?.[0]);
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema:allValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      let res: any;
      if (values.img_file != null) {
        setIsLoading(true)
        const resImg = await uploadFile(values.img_file);
        if (resImg.status == 200) {
          let resData: any;
          console.log('entro aca');
          if (values.id == 0) {
            const body = {
              id: values.id,
              url_resource: resImg.url,
              module_id: values.module_id,
              title: values.title,
            };
            const formData = await enagApi.post(`/modules/resources`, body);
            setIsLoading(false)
            onSubmitResource(formData)
        } else {
            const body = {
              id: values.id,
              url_resource: resImg.url,
              module_id: values.module_id,
              title: values.title,
            };
            const formData = await enagApi.put(
              `/modules/resources/resource_id=${values.id}`,
              body
            );
            setIsLoading(false)
            onSubmitResource(formData)
          }
        }
      }
    },
  });
  return (
    <>
      {isLoading && (
        <Box
          position="absolute"
          display="flex"
          width="100%"
          height="15vh"
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
        className=" w-100 d-flex flex-column gap-3 mt-2"
      >
        <TextField
          type="file"
          variant="outlined"
          id="img_file"
          name="img_file"
          // value={formik.values.img_file}
          inputProps={{
            accept: "application/pdf",
          }}
          onChange={onFileInputChange}
          onBlur={formik.handleBlur}
          error={formik.touched.img_file && Boolean(formik.errors.img_file)}
          helperText={formik.touched.img_file && formik.errors.img_file}
        />
        <div>
          <Button variant="contained" type="submit" color="error">
            {" "}
            Guardar
          </Button>
          <Button
            variant="contained"
            className={styles.black_button + " ms-2"}
            onClick={onCancel}
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
