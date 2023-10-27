import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import React, { FC } from 'react'
import { Button, TextField, Container } from '@mui/material';
import { newAsistance } from '@/utils/newAsistance';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'

interface Props {
  module_id: number;
}

export const FormRegisterAsistance: FC<Props> = ({ module_id }) => {

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      date: '',
      description: '',
    },
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: 0,
        date: `${values.date}T00:00:00.000Z`,
        description: `${values.description}`,
        module_id
      };
      const res: any = await newAsistance(body);

      if (res.status == 200) {
        Swal.fire({
          icon: 'success',
          title: 'Registro de asistencia creado',
        }).then((res) => {
          router.push(`/teacher/module/asistance/${module_id}`)
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'No se puedo crear el registro',
        }).then((res) => {
          router.push(`/teacher/module/asistance/${module_id}`)
        })
      }
      resetForm();
    },

  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          type='date'
          variant='outlined'
          label='Fecha'
          id="date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
        />
        <TextField
          id="description"
          name="description"
          label="Descripción"
          type="text"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
        <Button color="primary" variant="contained" type="submit">
          Guardar
        </Button>
      </form>
    </Container>
  )
}
