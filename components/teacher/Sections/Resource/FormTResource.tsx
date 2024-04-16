import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { useRouter } from 'next/router';
import { enagApi } from '@/apis';
import { SectionResourceModel } from '@/models';
import { useFormik } from 'formik';
import { Button, Container, TextField } from '@mui/material';
import { newSectionResource } from '@/utils/section/resource/newSectionResource';
import Swal from 'sweetalert2';
import styles from '@/styles/Custom.module.css';

interface Props {
    section_id?: number;
    onSubmitResource: (formData: any) => void;
    onCancel:()=>void;
}

export const FormTResource: FC<Props> = ({ section_id, onSubmitResource, onCancel }) => {

    const router = useRouter()


    const [initialValues, setInitialValues] = useState({
        id: 0,
        url_resource: '',
        section_id: section_id,
        title: '',
        file: null
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
                file: values.file
            }

            const res: any = await newSectionResource(body);

            if (res.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Los datos se guardaron',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No se pudo guardar los datos',
                })
            }

            onSubmitResource(res)
            resetForm();
        }
    })

    const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        if (target.files && target.files.length === 0) return
        formik.setFieldValue('file', target.files?.[0])
    }

    const handleCancel=()=>{
        onCancel()
    }


    return (
        <Container>
            <form onSubmit={formik.handleSubmit} className='container w-75 d-flex flex-column gap-3' >
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
                <div>
                    <Button color='error' variant='contained' type='submit'> Guardar </Button>
                    <Button variant='contained' type='reset' className={styles.black_button+' ms-2'} onClick={handleCancel} > Cancelar </Button>

                </div>
            </form>
        </Container>
    )
}
