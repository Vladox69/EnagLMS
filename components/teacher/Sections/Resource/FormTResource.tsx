import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { useRouter } from 'next/router';
import { enagApi } from '@/apis';
import { SectionResourceModel } from '@/models';
import { useFormik } from 'formik';
import { Button, Container, TextField } from '@mui/material';
import { newSectionResource } from '@/utils/section/resource/newSectionResource';
import Swal from 'sweetalert2';

interface Props {
    section_id?: number;
    onSubmitResource: (formData: any) => void
}

export const FormTResource: FC<Props> = ({ section_id,onSubmitResource }) => {

    const router = useRouter()


    const [initialValues, setInitialValues] = useState({
        id: 0,
        url_resource: '',
        section_id: section_id,
        title: '',
        file:null
    })


    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {

            const body = {
                id: values.id,
                url_resource: values.url_resource,
                section_id: values.section_id,
                title: values.title,
                file:values.file
            }
            
            const res:any = await newSectionResource(body);

            if(res.status==200){
                Swal.fire({
                    icon: 'success',
                    title: 'Los datos se guardaron',
                })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'No se pudo guardar los datos',
                })
            }

            onSubmitResource(res)

            resetForm();
        }
    })

    const onFileInputChange=(event: ChangeEvent<HTMLInputElement>)=>{
        const target=event.target
        if(target.files&&target.files.length === 0) return
        formik.setFieldValue('file',target.files?.[0])
    }


    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    type='text'
                    variant='outlined'
                    label='Título'
                    id="title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
                <TextField
                    type='file'
                    variant='outlined'
                    id="file"
                    name="file"
                    // value={formik.values.file}
                    onChange={onFileInputChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.file && Boolean(formik.errors.file)}
                    helperText={formik.touched.file && formik.errors.file}
                />
                <Button color='primary' variant='contained' type='submit'> Guardar </Button>
            </form>
        </Container>
    )
}
