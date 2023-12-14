import React, { ChangeEvent, FC, useState } from 'react'
import { Container, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { newActivityResource } from '@/utils/activity/resource/newActivityResource';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

interface Props {
    activity_id: number,
    onSubmitResource: (formData: any) => void
}

export const FormActivityResource: FC<Props> = ({ activity_id,onSubmitResource }) => {

    const router = useRouter()

    const [initialValues, setInitialValues] = useState({
        id: 0,
        url_resource: '',
        activity_id: activity_id,
        title: '',
        file: null
    })

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm}) => {
            const body = {
                id: values.id,
                url_resource: values.url_resource,
                activity_id: values.activity_id,
                title: values.title,
                file: values.file
            }
            const res:any =await newActivityResource(body)

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

    const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        if (target.files && target.files.length === 0) return
        formik.setFieldValue('file', target.files?.[0])
    }

    return (
        <Container>
            <form onSubmit={formik.handleSubmit} >
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
