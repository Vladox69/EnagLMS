import { newCourse } from '@/utils/admin/course/newCourse';
import { Container, TextField, Typography, Button, Box, CircularProgress, Divider, MenuItem } from '@mui/material';
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect, FC, useState, ChangeEvent } from 'react'
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';
import styles from '@/styles/Custom.module.css'
import { enagApi } from '@/apis';
import { CourseModel } from '@/models';
import { editCourse } from '@/utils/admin/course/editCourse';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface Props {
    course_id?: number
}

export const FormACourse: FC<Props> = ({ course_id }) => {

    const router = useRouter()

    useEffect(() => {
        if (course_id != undefined) {
            getData();
        }
    }, [course_id])

    const goBack = () => {
        router.back()
    }

    const [initialValues, setInitialValues] = useState({
        id: 0,
        topic: '',
        content: '',
        start_at: '00:00:00T00:00:00.000z',
        end_at: '00:00:00T00:00:00.000z',
        modality: '',
        objective: '',
        periods: 0,
        qualification: '',
        requirements: '',
        type: '',
        visible: true,
        img_file: null,
        img_url: ''
    })
    const [content, setContent] = useState('')
    const [requirements, setRequirements] = useState('')

    const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        if (target.files && target.files.length === 0) return
        formik.setFieldValue('file', target.files?.[0])
    }

    const getData = async () => {
        if (course_id != undefined) {
            const { data } = await enagApi.get<CourseModel>(`/courses/course_id=${course_id}`)
            console.log(data);
            setInitialValues({
                id: data.id,
                topic: data.topic,
                content: data.content,
                start_at: data.start_at.toString().slice(0, data.start_at.toString().lastIndexOf('T')),
                end_at: data.end_at.toString().slice(0, data.end_at.toString().lastIndexOf('T')),
                modality: data.modality,
                objective: data.objective,
                periods: data.periods,
                qualification: data.qualification,
                requirements: data.requirements,
                type: data.type,
                visible: data.visible,
                img_file: null,
                img_url: data.img_url
            })
            setContent(data.content)
            setRequirements(data.requirements)
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {

            const body = {
                id: values.id,
                topic: values.topic,
                content: content,
                start_at: `${values.start_at}T00:00:00.000z`,
                end_at: `${values.end_at}T00:00:00.000z`,
                modality: values.modality,
                objective: values.objective,
                periods: values.periods,
                qualification: values.qualification,
                requirements: requirements,
                type: values.type,
                visible: values.visible,
                img_file: values.img_file,
                img_url: values.img_url
            }

            let res: any
            if (course_id != undefined) {
                res = await editCourse(body)
            } else {
                res = await newCourse(body)
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

            <form action="" onSubmit={formik.handleSubmit} className='container w-75 d-flex flex-column gap-3 mt-5 mb-5'>
                <Typography variant='h4' > Datos del curso </Typography>
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
                <TextField
                    type='date'
                    variant='outlined'
                    id="start_at"
                    name="start_at"
                    label='Fecha de inicio'
                    value={formik.values.start_at}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.start_at && Boolean(formik.errors.start_at)}
                    helperText={formik.touched.start_at && formik.errors.start_at}
                />
                <TextField
                    type='date'
                    variant='outlined'
                    id="end_at"
                    name="end_at"
                    label='Fecha de cierre'
                    value={formik.values.end_at}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.end_at && Boolean(formik.errors.end_at)}
                    helperText={formik.touched.end_at && formik.errors.end_at}
                />
                <div>
                    <Typography component='p'>Contenido</Typography>
                    <ReactQuill
                        theme="snow"
                        id="content"
                        value={content}
                        onChange={setContent}
                    />
                </div>
                <Divider />
                <TextField
                    type='date'
                    variant='outlined'
                    id="qualification"
                    name="qualification"
                    label='Titulación'
                    value={formik.values.qualification}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.qualification && Boolean(formik.errors.qualification)}
                    helperText={formik.touched.qualification && formik.errors.qualification}
                />
                <TextField
                    type='number'
                    variant='outlined'
                    id="periods"
                    name="periods"
                    label='Periodos'
                    value={formik.values.periods}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.periods && Boolean(formik.errors.periods)}
                    helperText={formik.touched.periods && formik.errors.periods}
                />
                <TextField
                    type='text'
                    variant='outlined'
                    id="objective"
                    name="objective"
                    label='Objetivo'
                    value={formik.values.objective}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.objective && Boolean(formik.errors.objective)}
                    helperText={formik.touched.objective && formik.errors.objective}
                />

                <TextField
                    id="type"
                    select
                    name='type'
                    label="Tipo"
                    variant='outlined'
                    value={formik.values.type}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.type && Boolean(formik.errors.type)}
                >
                    <MenuItem value=''>No seleccionado</MenuItem>
                    <MenuItem value='Corto'  >
                        Corto
                    </MenuItem>
                    <MenuItem value='Largo'  >
                        Largo
                    </MenuItem>
                </TextField>

                <TextField
                    id="visible"
                    select
                    name='visible'
                    label="Visible"
                    variant='outlined'
                    value={formik.values.visible}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.visible && Boolean(formik.errors.visible)}
                >
                    <MenuItem value='false'>No seleccionado</MenuItem>
                    <MenuItem value='true'  >
                        Visible
                    </MenuItem>
                    <MenuItem value='false'  >
                        No visible
                    </MenuItem>
                </TextField>

                <div>
                    <Typography component='p'>Imagen</Typography>
                    <TextField
                        type='img_file'
                        variant='outlined'
                        id="img_file"
                        name="img_file"
                        // value={formik.values.img_file}
                        onChange={onFileInputChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.img_file && Boolean(formik.errors.img_file)}
                        helperText={formik.touched.img_file && formik.errors.img_file}
                    />
                </div>

                <div>
                    <Typography component='p'>Requerimientos</Typography>
                    <ReactQuill
                        theme="snow"
                        id="requirements"
                        value={requirements}
                        onChange={setRequirements}
                    />
                </div>

                <div>
                    <Button variant='contained' type='submit' color='error'> Guardar</Button>
                    <Button variant='contained' onClick={goBack} className={styles.black_button + ' ms-2'}> Cancelar</Button>
                </div>
            </form>
        </Container>
    )
}
