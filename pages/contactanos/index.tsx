import React, { useState } from 'react'
import { Navbar, Footer } from '@/components/ui';
import { Button, Container, TextField, Typography } from '@mui/material';
import Image from 'next/image';

import bgImage from '@/assets/fondo.jpg'
import { useFormik } from 'formik';

export default function Contactanos() {

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
            <Container className='d-flex flex-column justify-content-center align-items-center text-center mt-5 mb-5'>
                <Typography variant='h1' fontSize={25} > Contactanos </Typography>
                <p style={{ textAlign: 'justify' }}>
                    En ENAG, valoramos cada una de tus consultas y estamos comprometidos a brindarte la mejor atención.
                    Si tienes preguntas sobre nuestros programas, cursos personalizados o necesitas asistencia para iniciar tu camino en el mundo de la gastronomía, no dudes en contactarnos.
                    Nuestro equipo está listo para asesorarte y proporcionarte toda la información que necesitas.
                    Rellena el formulario de contacto o, si lo prefieres, llámanos o visítanos en nuestras instalaciones para una atención más personalizada.
                    Tu pasión por la cocina merece la mejor orientación, y en ENAG estamos deseosos de formar parte de tu viaje culinario.
                </p>
                <Container className='d-flex justify-content-around mb-5' >
                    <Container>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4267208197675!2d-78.62407727240137!3d-1.2601033998409856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d38188a19532c3%3A0xdd8e91d84a701f98!2sRinc%C3%B3n%20del%20Pepino!5e0!3m2!1ses!2sec!4v1702336156185!5m2!1ses!2sec" width="600" height="450"  loading="lazy" />
                        <Typography variant='h4' fontSize={20} >Av. Cevallos y 12 de Noviembre</Typography>
                        <Typography variant='h4' fontSize={20} >Matriz Ambato</Typography>
                    </Container>
                    <Container>
                        <form action="" className='container w-100 d-flex flex-column gap-3'>
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
                                label='Mensaje'
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
                </Container>

            </Container>
            <Footer />
        </>
    )
}
