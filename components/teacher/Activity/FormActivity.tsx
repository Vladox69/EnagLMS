import React, { FC, useState, useEffect } from 'react'
import { Container, TextField, Button } from '@mui/material';
import { enagApi } from '@/apis';
import { ActivityModel } from '@/models';
import { useFormik } from 'formik';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { updateActivity } from '@/utils/activity/updateActivity';
import { newActivity } from '@/utils/activity/newActivity';

interface Props {
    section_id?: number;
    activity_id?: number;
}

export const FormActivity: FC<Props> = ({ section_id, activity_id }) => {

    const router =useRouter()

    const [content, setContent] = useState('')

    const [initialValues, setInitialValues] = useState({
        id: 0,
        title: '',
        content: '',
        time_due: '',
        section_id: 0
    })

    useEffect(() => {
        if (!!activity_id) {
            getDataActivity();
        }
    }, [activity_id])

    const getDataActivity = async () => {
        if (!!activity_id) {
            const { data } = await enagApi.get<ActivityModel>(`/activities/activity_id=${activity_id}`)
            setInitialValues({
                id: data.id,
                title: data.title,
                content: data.content,
                time_due: data.time_due.toString().slice(0, data.time_due.toString().lastIndexOf('T')),
                section_id: data.section_id
            })
            setContent(data.content);
        }

    }

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {
            const body = {
                id: values.id,
                title: values.title,
                content: content,
                time_due: `${values.time_due}T00:00:00.000z`,
                section_id: section_id!
            }

            let res: any;
            if(!!activity_id){
                res = await updateActivity(body);
            }else{
                res = await newActivity(body);
            }
            if(res.status==200){
                Swal.fire({
                    icon: 'success',
                    title: 'Los datos se guardaron',
                }).then(() => {
                    router.push(`/teacher/module/section/${res.data.section_id}`)
                })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'No se pudo guardar los datos',
                }).then(() => {
                    router.push(`/teacher/module/section/${res.data.section_id}`)
                })
            }

            resetForm();
        }
    })



    return (
        <Container>
            <form  onSubmit={formik.handleSubmit}>
                <TextField
                    type='text'
                    variant='outlined'
                    label='Title'
                    id="title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
                
                <TextField
                    type='date'
                    variant='outlined'
                    label='Fecha'
                    id="time_due"
                    name="time_due"
                    value={formik.values.time_due}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.time_due && Boolean(formik.errors.time_due)}
                    helperText={formik.touched.time_due && formik.errors.time_due}
                />
              
                <ReactQuill 
                    theme="snow"
                    id="content"
                    value={content}
                    onChange={setContent}
                />
                <Button color='primary' variant='contained' type='submit'> Guardar </Button>
            </form>
        </Container>
    )
}
