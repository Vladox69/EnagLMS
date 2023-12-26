import React, { useState } from 'react'
import { Button, TextField, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import styles from '@/styles/Custom.module.css';
import { enagApi } from '@/apis';

export const LoginForm = () => {

    const router = useRouter()
    const [initialValues, setInitialValues] = useState({
        username: '',
        password: ''
    })

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {
            const body = {
                username: values.username,
                password: values.password
            }

            await enagApi.post(`/auth/login`, body)
            const { data: user } = await enagApi.get(`/auth/profile`)
            switch (user.rol) {
                case 'ADMIN':
                    router.push('/admin')
                    break;
                case 'STUDENT':
                    router.push('/my')
                    break;
                case 'TEACHER':
                    router.push('/teacher')
                    break;
                default:
                    break;
            }
        }
    })

    const goBack = () => {
        router.back()
    }

    return (
        <Container>
            <form onSubmit={formik.handleSubmit} className='container w-75 d-flex flex-column gap-3 mt-5 mb-5'>
                <Typography variant='h4' >Inicio de sesiòn</Typography>
                <TextField
                    type='text'
                    variant='outlined'
                    label='Usuario'
                    id="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                <TextField
                    type='text'
                    variant='outlined'
                    label='Contraseña'
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <div>
                    <Button color="error" variant="contained" type="submit" className='me-2'>
                        INGRESAR
                    </Button>
                    <Button variant="contained" className={styles.black_button} onClick={goBack} >
                        Cancelar
                    </Button>
                </div>
            </form>
        </Container>
    )
}
