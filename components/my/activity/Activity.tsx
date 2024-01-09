import { enagApi } from '@/apis';
import { MyContext } from '@/context/my';
import { SubmissionStudentI } from '@/interface/submission_student';
import { ActivityModel, StudentModel, SubmissionModel, SubmissionResourceModel } from '@/models';
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC, useContext, useEffect, useState } from 'react'

interface Props {
    activity: ActivityModel,
}

export const Activity: FC<Props> = ({ activity }) => {

    
    const router = useRouter()

    const goToSubmissionById = () => {
        router.push(`/my/course/module/activity/submission/${submission?.id}`)
    }
    
    useEffect(() => {
        getDataSubmission();
    }, [])

    const [submission, setSubmission] = useState<SubmissionModel>()
    const [resources, setResources] = useState<SubmissionResourceModel[]>()



    const getDataSubmission = async () => {
        const { data: p } = await enagApi.get(`/auth/profile`)
        const { data: s } = await enagApi.get<StudentModel>(`/students/user_id=${p.user_id}`)
        const { data: sub } = await enagApi.get<SubmissionModel>(`/submissions/student_id=${s?.id}&activity_id=${activity.id}`)
        const { data: reso } = await enagApi.get<SubmissionResourceModel[]>(`/submissions/resources/submission_id=${sub.id}`)
        setSubmission(sub)
        setResources(reso)
    }

    return (
        <Container className='container'>
            <Typography variant='h4' >
                {activity.title}
            </Typography>
            <Typography component='p' dangerouslySetInnerHTML={{
                __html:activity.content
            }} />
            <Button variant='contained' color='error' className='my-3' onClick={goToSubmissionById} >
                Agregar entrega
            </Button>
            <TableContainer component={Paper} className='border rounded'>
                <Table aria-label="caption table">
                    <TableBody>
                        <TableRow>
                            <TableCell width={300} >
                                Estado de la entrega
                            </TableCell>
                            <TableCell className='text-start' > {submission?.state_sub} </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width={300} >
                                Estado de la calificación
                            </TableCell>
                            <TableCell className='text-start' > {(submission?.state_gra)=='Calificado' ? submission.grade :submission?.state_gra}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width={300} >
                                Archivos enviados
                            </TableCell>
                            <TableCell className='text-start' >
                                {
                                    (resources?.length == 0) ?
                                        (<span> - </span>)
                                        : (resources?.map((resource) => (<li key={resource.id} > {resource.title} </li>)))
                                }
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width={300} >
                                Observaciones
                            </TableCell>
                            <TableCell className='text-start' dangerouslySetInnerHTML={{
                                __html: (submission?.comment) ?? ''
                            }} />
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    )
}
