import { useRouter } from 'next/router';
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Button, Container, MenuItem, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { CustomDialog } from '@/components/my/CustomDialog';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { newUser } from '@/utils/admin/user/newUser';
import Swal from 'sweetalert2';
import { enagApi } from '@/apis';
import { UserModel } from '@/models';
import { updateUser } from '@/utils/admin/user/updateUser';

interface Props {
    user_id?: number;
}

export const FormAUser: FC<Props> = ({ user_id }) => {
    const router = useRouter()

    useEffect(() => {
        if (user_id != undefined) {
            getData()
        }
    }, [user_id])

    const [initialValues, setInitialValues] = useState({
        id: 0,
        username: '',
        password: '',
        email: '',
        rol: 'no',
        photo_url: '',
        photo_file: null
    })
    const [photo, setPhoto] = useState(false)

    const onPhotoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        if (target.files && target.files.length === 0) return
        formik.setFieldValue('photo_file', target.files?.[0])
    }

    const getData = async () => {
        const { data } = await enagApi.get<UserModel>(`/users/user_id=${user_id}`)
        setInitialValues({
            id: data.id,
            username: data.username,
            password: data.password,
            email: data.email,
            rol: data.rol,
            photo_url: data.photo_url,
            photo_file: null
        })
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
                username: values.username,
                password: values.password,
                email: values.email,
                rol: values.rol,
                photo_url: values.photo_url,
                photo_file: values.photo_file
            }

            let res: any;
            if (user_id != undefined) {
                res = await updateUser(body)
            } else {
                res = await newUser(body)
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
            <form action="" onSubmit={formik.handleSubmit}  >
                <TextField
                    type='text'
                    variant='outlined'
                    label='Nombre de usuario'
                    id="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                <TextField
                    type='email'
                    variant='outlined'
                    label='Correo electrónico'
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    type='password'
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
                <Typography component='p' > Foto de perfil </Typography>
                <TextField
                    type='file'
                    variant='outlined'
                    id="photo_url"
                    name="photo_url"
                    inputProps={{
                        accept: 'application/pdf'
                    }}
                    onChange={onPhotoInputChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.photo_url && Boolean(formik.errors.photo_url)}
                    helperText={formik.touched.photo_url && formik.errors.photo_url}
                />
                {(!!user_id) ? renderResource('Foto de perfil.pdf', formik.values.photo_url, photo, setPhoto) : <></>}
                <TextField
                    id="rol"
                    select
                    name='rol'
                    label="Usuarios"
                    variant='outlined'
                    value={formik.values.rol}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.rol && Boolean(formik.errors.rol)}
                >
                    <MenuItem value='no'>No seleccionado</MenuItem>
                    <MenuItem value='TEACHER'  >
                        PROFESOR
                    </MenuItem>
                    <MenuItem value='USER'>
                        USUARIO
                    </MenuItem>
                    <MenuItem value='STUDENT'  >
                        ESTUDIANTE
                    </MenuItem>
                </TextField>
                <Button color='primary' variant='contained' type='submit'> Guardar </Button>
            </form>
        </Container>
    )
}
