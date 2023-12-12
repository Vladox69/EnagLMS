import { newIntern } from '@/utils/admin/intern/newIntern'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useState } from 'react'
import Swal from 'sweetalert2'

export const FormAIntern = () => {

    const router = useRouter()

    const [initialValues, setInitialValues] = useState({
        id: 0,
        name: '',
        phone: '',
        email: '',
        cv_url: '',
        cv_file: null
    })

    const onCVInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        if (target.files && target.files.length === 0) return
        formik.setFieldValue('cv_file', target.files?.[0])
    }


    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {
            const body = {
                id: values.id,
                name: values.name,
                phone: values.phone,
                email: values.email,
                cv_url: values.cv_url,
                cv_file: values.cv_file
            }
            let res: any
            res = await newIntern(body)
            if (res.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Tus datos han sido enviados',
                }).then(() => {
                    router.replace('/pasantias')
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No se pudieron enviar tus datos',
                }).then(() => {
                    router.replace('/pasantias')
                })
            }
            resetForm();

        }
    })


    return (
        <Container>
            <form action="" onSubmit={formik.handleSubmit} className='container w-75 d-flex flex-column gap-3 mt-5 mb-5' >
                <TextField
                    type='text'
                    variant='outlined'
                    label='Nombre completo'
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
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
                <Typography component='p' className='text-start '> Hoja de vida </Typography>
                <TextField
                    type='file'

                    variant='outlined'
                    id="cv_url"
                    name="cv_url"
                    inputProps={{
                        accept: 'application/pdf'
                    }}
                    onChange={onCVInputChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.cv_url && Boolean(formik.errors.cv_url)}
                    helperText={formik.touched.cv_url && formik.errors.cv_url}
                />
                <Button color='error' variant='contained' className='w-25' type='submit'> Postular </Button>
            </form>
        </Container>
    )
}
