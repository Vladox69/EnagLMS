import { enagApi } from "@/apis";
import { StudentModel } from "@/models";
import { newInternInscription } from "@/utils/admin/intern-inscription/newInternInscription";
import { Button, Container, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import styles from "@/styles/Custom.module.css";

interface Props {
  course_id?: number;
  students_ins: StudentModel[];
  onSubmitResource: (formData: any) => void;
  onCancel: () => void;
}

export const FormInternInscription: FC<Props> = ({
  course_id,
  students_ins,
  onSubmitResource,
  onCancel,
}) => {
  const router = useRouter();
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [initialValues, setInitialValues] = useState({
    id: 0,
    student_id: 0,
    course_id,
  });
  const getData = async () => {
    const { data: stu } = await enagApi.get<StudentModel[]>(`/students`);
    const res = stu.filter(s1 => !students_ins.some(s2 => s2.id === s1.id))
    setStudents(res);
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: values.id,
        student_id: values.student_id,
        course_id: values.course_id,
      };

      let res: any;
      res = await newInternInscription(body);
      onSubmitResource(res);
      resetForm();
    },
  });
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <form action="" onSubmit={formik.handleSubmit} className=' w-100 d-flex flex-column gap-3 mt-2'>
        <TextField
          id="student_id"
          select
          name="student_id"
          label="Estudiante"
          variant="outlined"
          value={formik.values.student_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.student_id && Boolean(formik.errors.student_id)}
        >
          <MenuItem value={0}>No seleccionado</MenuItem>
          {students.map((student) => (
            <MenuItem key={student.id} value={student.id}>
              {/* {student.names} {student.last_names} */}
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
    </Container>
  );
};
