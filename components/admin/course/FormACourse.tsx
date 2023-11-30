import { newCourse } from '@/utils/admin/course/newCourse';
import { Container, TextField, Typography, Button } from '@mui/material';
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect, FC, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';

interface Props {
    course_id?: number
}

export const FormACourse: FC<Props> = ({ course_id }) => {

    const router = useRouter()

    useEffect(() => {

    }, [course_id])

    const [initialValues, setInitialValues] = useState({
        id: 0,
        topic: '',
        content: '',
        start_at: '',
        end_at: '',
    })
    const [content, setContent] = useState('')

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {
            
            const body={
                id:values.id,
                topic:values.topic,
                content:content,
                start_at:`${values.start_at}T00:00:00.000z`,
                end_at:`${values.end_at}T00:00:00.000z`     
            }

            let res:any
            res = await newCourse(body)
            if (res.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Los datos se guardaron',
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
        }
    })

    return (
        <Container>
            <form action="" onSubmit={formik.handleSubmit} >
                <TextField
                    type='text'
                    variant='outlined'
                    label='Título'
                    id="topic"
                    name="topic"
                    value={formik.values.topic}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.topic && Boolean(formik.errors.topic)}
                    helperText={formik.touched.topic && formik.errors.topic}
                />
                <Typography component='p'>Fecha de inicio</Typography>
                <TextField
                    type='date'
                    variant='outlined'
                    id="start_at"
                    name="start_at"
                    value={formik.values.start_at}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.start_at && Boolean(formik.errors.start_at)}
                    helperText={formik.touched.start_at && formik.errors.start_at}
                />
                <Typography component='p'>Fecha de cierre</Typography>
                <TextField
                    type='date'
                    variant='outlined'
                    id="end_at"
                    name="end_at"
                    value={formik.values.end_at}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.end_at && Boolean(formik.errors.end_at)}
                    helperText={formik.touched.end_at && formik.errors.end_at}
                />
                <ReactQuill
                    theme="snow"
                    id="content"
                    value={content}
                    onChange={setContent}
                />
                <Button variant='contained' type='submit' > Guardar</Button>
            </form>
        </Container>
    )
}
