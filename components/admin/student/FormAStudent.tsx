import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Button, Container, MenuItem, TextField, Typography } from '@mui/material';
import { enagApi } from '@/apis';
import { StudentModel, UserModel } from '@/models';
import { newStudent } from '@/utils/admin/student/newStudent';
import Swal from 'sweetalert2';
import { CustomDialog } from '@/components/my/CustomDialog';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { updateStudent } from '@/utils/admin/student/updateStudent';

interface Props {
    student_id?: number;
}

export const FormAStudent: FC<Props> = ({ student_id }) => {

    const router = useRouter()

    useEffect(() => {
        getData();
    }, [student_id])


    const [initialValues, setInitialValues] = useState({
        id: 0,
        ID_card_url: '',
        id_card_file: null,
        study_certificate_url: '',
        study_certificate_file: null,
        user_id: 0,
        names: '',
        last_names: ''
    })

    const [users, setUsers] = useState<UserModel[]>([])
    const [ID, setID] = useState(false)
    const [CS, setCS] = useState(false)

    const onIdCardInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        if (target.files && target.files.length === 0) return
        formik.setFieldValue('id_card_file', target.files?.[0])
    }

    const onStudyCertificateInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        if (target.files && target.files.length === 0) return
        formik.setFieldValue('study_certificate_file', target.files?.[0])
    }


    const renderResource = (title: string,
        url: string,
        state: boolean,
        setState: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {

        const handleOpen = () => {
            setState(!state)
        }

        const handleClose = () => {
            setState(!state)
        }

        return (
            <p onClick={handleOpen} >
                <PictureAsPdfIcon />
                <span >{title}</span>
                <CustomDialog open={state} handleClose={handleClose} title={title} url={url} />
            </p>
        )
    }

    const getData = async () => {
        const { data } = await enagApi.get(`/users/user_rol=STUDENT`)
        setUsers(data)
        if (student_id != undefined) {
            const { data: student } = await enagApi.get<StudentModel>(`/students/student_id=${student_id}`)
            setInitialValues({
                id: student.id,
                ID_card_url: student.ID_card_url,
                id_card_file: null,
                study_certificate_url: student.study_certificate_url,
                study_certificate_file: null,
                user_id: student.user_id,
                names: student.names,
                last_names: student.last_names
            })
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {
            const body = {
                id: values.id,
                ID_card_url: values.ID_card_url,
                id_card_file: values.id_card_file,
                study_certificate_url: values.study_certificate_url,
                study_certificate_file: values.study_certificate_file,
                user_id: values.user_id,
                names: values.names,
                last_names: values.last_names
            }

            let res: any;
            if (student_id != undefined) {
                res = await updateStudent(body)
            } else {
                res = await newStudent(body)

            }
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
            <form action="" onSubmit={formik.handleSubmit}>
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
                    id="ID_card_url"
                    name="ID_card_url"
                    inputProps={{
                        accept: 'application/pdf'
                    }}
                    onChange={onIdCardInputChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.ID_card_url && Boolean(formik.errors.ID_card_url)}
                    helperText={formik.touched.ID_card_url && formik.errors.ID_card_url}
                />
                {(!!student_id) ? renderResource('Cédula.pdf', formik.values.ID_card_url, ID, setID) : <></>}
                <Typography component='p' > Certificado de estudios </Typography>
                <TextField
                    type='file'
                    variant='outlined'
                    id="study_certificate_url"
                    name="study_certificate_url"
                    inputProps={{
                        accept: 'application/pdf'
                    }}
                    onChange={onStudyCertificateInputChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.study_certificate_url && Boolean(formik.errors.study_certificate_url)}
                    helperText={formik.touched.study_certificate_url && formik.errors.study_certificate_url}
                />
                {(!!student_id) ? renderResource('Certificado de estudio.pdf', formik.values.study_certificate_url, CS, setCS) : <></>}
                <TextField
                    id="user_id"
                    select
                    name='user_id'
                    label="Usuarios"
                    variant='outlined'
                    value={formik.values.user_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.user_id && Boolean(formik.errors.user_id)}
                >
                    <MenuItem value={0}>No seleccionado</MenuItem>
                    {users.map((user) => (
                        <MenuItem key={user.id} value={user.id}  >
                            {user.username}
                        </MenuItem>
                    ))}
                </TextField>
                <Button color='primary' variant='contained' type='submit'> Guardar </Button>
            </form>
        </Container>
    )
}
