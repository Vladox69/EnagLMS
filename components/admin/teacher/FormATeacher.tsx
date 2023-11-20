import React, { useEffect, useState } from 'react'
import { Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { enagApi } from '@/apis';

export const FormATeacher = () => {

    useEffect(() => {
        getData();
    }, [])
    

    const [initialValues, setInitialValues] = useState({
        id: 0,
        ID_card_url: '',
        cv_url: '',
        third_level_degree: '',
        user_id: 0,
        names: '',
        last_names: ''
    })

    const [users, setUsers] = useState()

    const getData=async ()=>{
        const {data}=await enagApi.get(`/users/user_rol=TEACHER`)
        console.log(data);
    }

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {
            const body = {
                id: values.id,
                ID_card_url: values.ID_card_url,
                cv_url: values.cv_url,
                third_level_degree: values.third_level_degree,
                user_id: values.user_id,
                names: values.names,
                last_names: values.last_names
            }

            let res: any;

            resetForm();

        }
    })

    return (
        <Container>
            <form action="">
                <TextField
                    type='text'
                    variant='outlined'
                    label='Nombres'
                    id="names"
                    name="names"
                    value={formik.values.names}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.names && Boolean(formik.errors.names)}
                    helperText={formik.touched.names && formik.errors.names}
                />
                <TextField
                    type='text'
                    variant='outlined'
                    label='Apellidos'
                    id="last_names"
                    name="last_names"
                    value={formik.values.last_names}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.last_names && Boolean(formik.errors.last_names)}
                    helperText={formik.touched.last_names && formik.errors.last_names}
                />
                <Typography component='p' > Cédula </Typography>
                <TextField
                    type='file'
                    variant='outlined'
                    id="cv_url"
                    name="cv_url"
                    value={formik.values.cv_url}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.cv_url && Boolean(formik.errors.cv_url)}
                    helperText={formik.touched.cv_url && formik.errors.cv_url}
                />
                <Typography component='p' > Título de tercer grado </Typography>
                <TextField
                    type='file'
                    variant='outlined'
                    id="third_level_degree"
                    name="third_level_degree"
                    value={formik.values.third_level_degree}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.third_level_degree && Boolean(formik.errors.third_level_degree)}
                    helperText={formik.touched.third_level_degree && formik.errors.third_level_degree}
                />
                <Typography component='p' > Hoja de vida </Typography>
                <TextField
                    type='file'
                    variant='outlined'
                    id="cv_url"
                    name="cv_url"
                    value={formik.values.cv_url}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.cv_url && Boolean(formik.errors.cv_url)}
                    helperText={formik.touched.cv_url && formik.errors.cv_url}
                />
            </form>
        </Container>
    )
}
