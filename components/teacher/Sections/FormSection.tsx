import { enagApi } from '@/apis';
import { SectionModel } from '@/models';
import { newSection } from '@/utils/section/newSection';
import { updateSection } from '@/utils/section/updateSection';
import { Container, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';

interface Props {
    module_id?: number;
    section_id?: number;
}

export const FormSection: FC<Props> = ({ module_id, section_id }) => {

    const router = useRouter();
    const [content, setContent] = useState('')

    const [initialValues, setInitialValues] = useState({
        id: 0,
        title: '',
        content: '',
        module_id: 0
    })

    useEffect(() => {
        if (!!section_id) {
            getDataSection();
        }
    }, [section_id])

    const getDataSection = async () => {
        if (!!section_id) {
            const { data } = await enagApi.get<SectionModel>(`/sections/section_id=${section_id}`);

            setInitialValues({
                id: data.id,
                title: data.title,
                content: data.content,
                module_id: data.module_id
            })

            setContent(data.content)

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
                module_id: module_id!
            }

            let res: any;
            if (!!section_id) {
                res = await updateSection(body);
            } else {
                res = await newSection(body);
            }

            if (res.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Los datos se guardaron',
                }).then(() => {
                    router.push(`/teacher/module/${res.data.module_id}`)
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No se pudo guardar los datos',
                }).then(() => {
                    router.push(`/teacher/module/${res.data.module_id}`)
                })
            }

            setContent('');
            resetForm();
        }
    })

    return (
        <Container>
            <form action="" onSubmit={formik.handleSubmit} >
                <TextField
                    type='title'
                    variant='outlined'
                    label='Título'
                    id='title'
                    name='title'
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
                <ReactQuill
                    theme="snow"
                    id="content"
                    value={content}
                    onChange={setContent}
                />
                <Button color='primary' variant='contained' type='submit'>
                    Guardar
                </Button>
            </form>
        </Container>
    )
}
