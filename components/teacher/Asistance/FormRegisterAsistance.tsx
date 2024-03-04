import { useFormik } from 'formik'
import React, { FC, useEffect } from 'react'
import { Button, TextField, Container, Typography } from '@mui/material';
import { newAsistance } from '@/utils/asistance/newAsistance';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'
import { enagApi } from '@/apis';
import { useState } from 'react';
import { AsistanceModel } from '@/models';
import { updateAsistance } from '@/utils/asistance/updateAsistance';
import styles from '@/styles/Custom.module.css';

interface Props {
  module_id?: number;
  asistance_id?: number;
}

export const FormRegisterAsistance: FC<Props> = ({ module_id, asistance_id }) => {

  const router = useRouter();
  const [initialValues, setInitialValues] = useState({
    id:0,
    date: '00:00:00T00:00:00.000Z',
    description: '',
    module_id:0
  })

  useEffect(() => {
    if (asistance_id!=undefined) {
      getDataRegister();
    }
  }, [asistance_id])

  const getDataRegister = async () => {
    if (!!asistance_id) {
      const { data } = await enagApi.get<AsistanceModel>(`/asistances/asistance_id=${asistance_id}`);
      setInitialValues({
        id:data.id,
        date: data.date.toString().slice(0, data.date.toString().lastIndexOf('T')),
        description: data.description,
        module_id:module_id!
      })
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: values.id,
        date: `${values.date}T00:00:00.000Z`,
        description: `${values.description}`,
        module_id: module_id!
      };
      let res:any;

      if (!!asistance_id) {
        res = await updateAsistance(body);
      } else {
        res = await newAsistance(body);
      }

      if (res.status == 200) {
        Swal.fire({
          icon: 'success',
          title: 'Los datos de guardaron',
        }).then(() => {
          router.back()
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'No se pudo guardar los datos',
        }).then(() => {
          router.back()
        })
      }
      resetForm();
    },

  });

  const goBack=()=>{
    router.back()
  }

  return (
    <Container>
      <form onSubmit={formik.handleSubmit} className='container w-75 d-flex flex-column gap-3 mt-5 mb-5'>
        <Typography variant='h4' >Formulario para { (asistance_id!=undefined)? ' edición ':' creación '} de asistencia </Typography>
        <TextField
          type='date'
          variant='outlined'
          label='Fecha de asistencia'
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
        <div>
        <Button color="error" variant="contained" type="submit" className='me-2'>
          Guardar
        </Button>
        <Button  variant="contained"  className={styles.black_button} onClick={goBack}>
          Cancelar
        </Button>
        </div>
        
      </form>
    </Container>
  )
}