import { enagApi } from '@/apis';
import { StudentModel } from '@/models';
import { newInscription } from '@/utils/admin/inscription/newInscription';
import { Button, Container, MenuItem, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { FC, useEffect, useState } from 'react'

interface Props {
    course_id: number;
    students_ins: StudentModel[];
    onSubmitResource: (formData: any) => void
}

export const FormAInscription: FC<Props> = ({ students_ins, course_id, onSubmitResource }) => {

    useEffect(() => {
        getData()
    }, [])

    const [students, setStudents] = useState<StudentModel[]>([])
    const [initialValues, setInitialValues] = useState({
        id: 0,
        student_id: 0,
        course_id
    })
    const getData = async () => {
        const { data: stu } = await enagApi.get<StudentModel[]>(`/students`)
        const res = stu.filter(s1 => !students_ins.some(s2 => s2.id === s1.id))
        setStudents(res)
    }

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {

            const body = {
                id: values.id,
                student_id: values.student_id,
                course_id: values.course_id
            }

            let res:any
            res = await newInscription(body)
            onSubmitResource(res)
            resetForm()
        }
    })

    return (
        <Container>
            <form action="" onSubmit={formik.handleSubmit} >
                <TextField
                    id="student_id"
                    select
                    name='student_id'
                    label="Profesores"
                    variant='outlined'
                    value={formik.values.student_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.student_id && Boolean(formik.errors.student_id)}
                >
                    <MenuItem value={0}>No seleccionado</MenuItem>
                    {students.map((student) => (
                        <MenuItem key={student.id} value={student.id}  >
                            {student.names} {student.last_names}
                        </MenuItem>
                    ))}
                </TextField>
                <Button variant='contained' type='submit' > Guardar</Button>
            </form>
        </Container>
    )
}
