import React, { useState } from 'react'
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { Navbar, Footer } from '@/components/ui';
import { useFormik } from 'formik';

const Personalizado = () => {

  const [initialValues, setInitialValues] = useState({
    id: 0,
    completeName: '',
    phone: '',
    email: '',
    topic: ''
  })

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      const body = {
        id: values.id,
        completeName: values.completeName,
        phone: values.phone,
        email: values.email,
        topic: values.topic,
      }
      let res: any;

    }
  })

  return (
    <>
      <Navbar />
      <Container className='d-flex flex-column justify-content-center align-items-center text-center mt-5 mb-5'  >
        <Typography variant='h1' fontSize={30} >
          CURSOS PERSONALIZADOS
        </Typography>
        <p className=''>
        Descubre una nueva dimensión en la formación con nuestros cursos personalizados, diseñados para adaptarse perfectamente a tus necesidades y objetivos específicos. 
        Ya sea para profundizar en una especialidad gastronómica, para perfeccionar técnicas culinarias particulares o para explorar nuevos horizontes culinarios, nuestros expertos están listos para elaborar un plan de estudios único, pensado exclusivamente para ti. 
        Completa nuestro formulario y empieza tu viaje hacia una educación que se amolda a ti, a tu ritmo y a tus ambiciones en el mundo de la gastronomía.
        </p>

        <form action="" className='container w-75 d-flex flex-column gap-3'>
          <TextField
            type='text'
            variant='outlined'
            label='Nombre completo'
            id="completeName"
            name="completeName"
            className=''
            value={formik.values.completeName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.completeName && Boolean(formik.errors.completeName)}
            helperText={formik.touched.completeName && formik.errors.completeName}
          />
          <TextField
            type='text'
            variant='outlined'
            label='Celular'
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            type='text'
            variant='outlined'
            label='Correo electrónico'
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            type='text'
            variant='outlined'
            label='Tema de interés'
            id="topic"
            name="topic"
            multiline
            rows={3}
            value={formik.values.topic}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.topic && Boolean(formik.errors.topic)}
            helperText={formik.touched.topic && formik.errors.topic}
          />
          <Button color='error' className='w-25 mb-2 text-end' variant='contained' type='submit'> Enviar </Button>
        </form>

      </Container>

      <Footer />
    </>
  )
}

export default Personalizado;

