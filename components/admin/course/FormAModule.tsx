import { enagApi } from "@/apis";
import { ModuleModel, TeacherModel } from "@/models";
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
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import styles from "@/styles/Custom.module.css";
import * as yup from "yup";
import Swal from "sweetalert2";
interface Props {
  module_id?: number;
  course_id?: number;
  onSubmitResource: (formData: any) => void;
  onCancel: () => void;
}

export const FormAModule: FC<Props> = ({
  module_id,
  course_id,
  onSubmitResource,
  onCancel,
}) => {
  const router = useRouter();

  useEffect(() => {
    getData();
  }, [module_id]);
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: 0,
    title: "",
    content: "",
    course_id: course_id != undefined ? course_id : 0,
    teacher_id: 0,
    hours: 0,
    img_file: null,
    img_url: "",
  });
  const [teachers, setTeachers] = useState<TeacherModel[]>([]);
  const validateMessage = "Campo obligatorio";
  const someValidation = yup.object({
    title: yup.string().required(validateMessage),
    teacher_id: yup
      .number()
      .required(validateMessage)
      .notOneOf([0], validateMessage),
  });
  const getData = async () => {
    setIsLoading(true);
    try {
      const { data: t } = await enagApi.get(`/teachers`);
      setTeachers(t);
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
        });
      }
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos porblemas al cargar los datos",
      });
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: someValidation,
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: values.id,
        title: values.title,
        content: values.content,
        course_id: values.course_id,
        teacher_id: values.teacher_id,
        hours: values.hours,
        img_file: values.img_file,
        img_url: values.img_url,
      };
      let res: any;
      if (module_id != undefined) {
        res = await updateModule(body);
        onSubmitResource(res);
      } else {
        res = await newModule(body);
        onSubmitResource(res);
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
                {teacher.names}
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
              onClick={onCancel}
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
