import { SubmissionModel } from '@/models'
import React, { FC,useState,useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { TextField, Button } from '@mui/material';
import { updateSubmission } from '@/utils/submission/updateSubmission';

interface Props {
    submission: SubmissionModel
}

export const FormSubmission: FC<Props> = ({ submission }) => {

    const router = useRouter()

    const [initialValues, setInitialValues] = useState({
        id: 0,
        grade: 0,
        comment: '',
        student_id: 0,
        activity_id: 0,
        state_gra:'',
        state_sub:''
    })

    useEffect(() => {
        if(!!submission){
            getDataSubmission();
        }
    }, [submission])
    

    const getDataSubmission=async ()=>{
        if(!!submission){
            
            setInitialValues({
                id: submission.id,
                grade: submission.grade,
                comment: submission.comment,
                student_id: submission.student_id,
                activity_id: submission.activity_id,
                state_gra:submission.state_gra,
                state_sub:submission.state_sub
            })
        }
    }

    const formik=useFormik({
        initialValues:initialValues,
        enableReinitialize:true,
        onSubmit: async (values,{resetForm})=>{
            const body={
                id: values.id,
                grade: values.grade,
                comment: values.comment,
                student_id: values.student_id,
                activity_id: values.activity_id,
                state_gra:'Calificado',
                state_sub:'Revisado'
            }

            let res:any;

            if(!!submission){
                res=await updateSubmission(body)                
            }

            if(res.status==200){
                Swal.fire({
                    icon: 'success',
                    title: 'Los datos se guardaron',
                }).then(() => {
                    router.back()
                })
            }else{
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
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    type='number'
                    variant='outlined'
                    label='Calificación'
                    id="grade"
                    name="grade"
                    value={formik.values.grade}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.grade && Boolean(formik.errors.grade)}
                    helperText={formik.touched.grade && formik.errors.grade}
                    inputProps={
                        {
                            min:0,
                            max:10
                        }
                    }
                />
                <TextField
                    type='text'
                    variant='outlined'
                    label='Comentarios'
                    multiline
                    rows={5}
                    id="comment"
                    name="comment"
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.comment && Boolean(formik.errors.comment)}
                    helperText={formik.touched.comment && formik.errors.comment}
                />

                {/* <ReactQuill theme='snow' id='content' value={content} onChange={setContent} /> */}
                <Button color='primary' variant='contained' type='submit' >Guardar </Button>
            </form>
        </Container>
    )
}
