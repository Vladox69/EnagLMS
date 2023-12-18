import React, { ChangeEvent, useEffect, useState, FC } from 'react'
import { Button, Container, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { enagApi } from '@/apis';
import { TeacherModel, UserModel } from '@/models';
import { newTeacher } from '@/utils/admin/teacher/newTeacher';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { CustomDialog } from '@/components/my/CustomDialog';
import { updateTeacher } from '@/utils/admin/teacher/updateTeacher';
import styles from '@/styles/Custom.module.css'


interface Props {
    teacher_id?: number;
}

export const FormATeacher: FC<Props> = ({ teacher_id }) => {

    const router = useRouter()

    useEffect(() => {
        getData();
    }, [teacher_id])

    const goBack=()=>{
        router.back()
    }

    const [initialValues, setInitialValues] = useState({
        id: 0,
        ID_card_url: '',
        id_card_file: null,
        cv_url: '',
        cv_file: null,
        third_level_degree: '',
        third_level_degree_file: null,
        user_id: 0,
        names: '',
        last_names: ''
    })

    const [ID, setID] = useState(false)
    const [CV, setCV] = useState(false)
    const [TLD, setTLD] = useState(false)

    const onIdCardInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        if (target.files && target.files.length === 0) return
        formik.setFieldValue('id_card_file', target.files?.[0])
    }

    const onCVInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        if (target.files && target.files.length === 0) return
        formik.setFieldValue('cv_file', target.files?.[0])
    }

    const onThridLevelInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        if (target.files && target.files.length === 0) return
        formik.setFieldValue('third_level_degree_file', target.files?.[0])
    }

    const [users, setUsers] = useState<UserModel[]>([])

    const getData = async () => {
        const { data } = await enagApi.get(`/users/user_rol=TEACHER`)
        setUsers(data)
        if (teacher_id != undefined) {
            const { data: teacher } = await enagApi.get<TeacherModel>(`/teachers/teacher_id=${teacher_id}`)
            setInitialValues({
                id: teacher.id,
                ID_card_url: teacher.ID_card_url,
                id_card_file: null,
                cv_url: teacher.cv_url,
                cv_file: null,
                third_level_degree: teacher.third_level_degree,
                third_level_degree_file: null,
                user_id: teacher.user_id,
                names: teacher.names,
                last_names: teacher.last_names
            })
        }
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
                last_names: values.last_names,
                id_card_file: values.id_card_file,
                cv_file: values.cv_file,
                third_level_degree_file: values.third_level_degree_file,
            }

            let res: any;
            if (teacher_id != undefined) {
                res = await updateTeacher(body)
            } else {
                res = await newTeacher(body);
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
            <form action="" onSubmit={formik.handleSubmit} className='container w-75 d-flex flex-column gap-3 mt-5 mb-5' >
                <Typography className='' variant='h4'>
                    Datos del profesor
                </Typography>
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

                <div>
                    <Typography component='p' > Cédula </Typography>
                    <TextField
                        type='file'
                        variant='outlined'
                        id="ID_card_url"
                        name="ID_card_url"
                        className='w-100'
                        // value={formik.values.cv_url}
                        onChange={onIdCardInputChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.ID_card_url && Boolean(formik.errors.ID_card_url)}
                        helperText={formik.touched.ID_card_url && formik.errors.ID_card_url}
                    />
                    {(!!teacher_id) ? renderResource('Cédula.pdf', formik.values.ID_card_url, ID, setID) : <></>}
                </div>
                <div>
                    <Typography component='p' > Título de tercer grado </Typography>
                    <TextField
                        type='file'
                        variant='outlined'
                        id="third_level_degree"
                        name="third_level_degree"
                        // value={formik.values.third_level_degree}
                        className='w-100'
                        onChange={onCVInputChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.third_level_degree && Boolean(formik.errors.third_level_degree)}
                        helperText={formik.touched.third_level_degree && formik.errors.third_level_degree}
                    />
                    {(!!teacher_id) ? renderResource('Hoja de vida.pdf', formik.values.cv_url, CV, setCV) : <></>}
                </div>
                <div >
                    <Typography component='p' > Hoja de vida </Typography>
                    <TextField
                        type='file'
                        variant='outlined'
                        id="cv_url"
                        name="cv_url"
                        // value={formik.values.cv_url}
                        className='w-100'
                        onChange={onThridLevelInputChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.cv_url && Boolean(formik.errors.cv_url)}
                        helperText={formik.touched.cv_url && formik.errors.cv_url}
                    />
                    {(!!teacher_id) ? renderResource('Certificado de tercer nivel.pdf', formik.values.third_level_degree, TLD, setTLD) : <></>}
                </div>
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
                <div>
                    <Button color='error' className='me-2' variant='contained' type='submit'> Guardar </Button>
                    <Button color='primary' variant='contained' className={ styles.black_button} onClick={goBack} >Cancelar </Button>
                </div>

            </form>
        </Container>
    )
}
