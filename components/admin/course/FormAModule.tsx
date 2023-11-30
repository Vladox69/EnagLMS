import { enagApi } from '@/apis';
import { ModuleModel, TeacherModel } from '@/models';
import { newModule } from '@/utils/admin/course/module/newModule';
import { updateModule } from '@/utils/admin/course/module/updateModule';
import { Button, Container, MenuItem, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik';
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

interface Props {
    module_id?: number;
    course_id?: number;
    onSubmitResource: (formData: any) => void
}

export const FormAModule: FC<Props> = ({ module_id, course_id, onSubmitResource }) => {

    const router = useRouter()
    useEffect(() => {
        getData()
    }, [module_id])

    const [initialValues, setInitialValues] = useState({
        id: 0,
        title: '',
        content: '',
        course_id: (course_id != undefined) ? course_id : 0,
        teacher_id: 0
    })
    const [teachers, setTeachers] = useState<TeacherModel[]>([])

    const getData = async () => {
        const { data: t } = await enagApi.get(`/teachers`)
        setTeachers(t)
        if (module_id != undefined) {
            const { data: m } = await enagApi.get<ModuleModel>(`/modules/module_id=${module_id}`)
            setInitialValues({
                id: m.id,
                title: m.title,
                content: m.content,
                course_id: m.course_id,
                teacher_id: m.teacher_id,
            })
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {
            const body = {
                id: values.id,
                title: values.title,
                content: values.content,
                course_id: values.course_id,
                teacher_id: values.teacher_id
            }
            let res: any;
            if (module_id != undefined) {
                res = await updateModule(body)
                onSubmitResource(res)
            } else {
                res = await newModule(body)
                onSubmitResource(res)
            }
            resetForm()
        }
    })

    return (
        <Container>
            <form action="" onSubmit={formik.handleSubmit} >
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
                    id="teacher_id"
                    select
                    name='teacher_id'
                    label="Profesores"
                    variant='outlined'
                    value={formik.values.teacher_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.teacher_id && Boolean(formik.errors.teacher_id)}
                >
                    <MenuItem value={0}>No seleccionado</MenuItem>
                    {teachers.map((teacher) => (
                        <MenuItem key={teacher.id} value={teacher.id}  >
                            {teacher.names}
                        </MenuItem>
                    ))}
                </TextField>
                {/* <Typography component='p'>Descripción</Typography>
                <ReactQuill
                    theme="snow"
                    id="content"
                    value={content}
                    onChange={setContent}
                /> */}


                <Button variant='contained' type='submit' > Guardar</Button>
            </form>
        </Container>
    )
}
