import { enagApi } from '@/apis';
import { MyContext } from '@/context/my';
import { SubmissionStudentI } from '@/interface/submission_student';
import { ActivityModel, SubmissionModel, SubmissionResourceModel } from '@/models';
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC, useContext, useEffect, useState } from 'react'

interface Props {
    activity: ActivityModel,
}

export const Activity: FC<Props> = ({ activity }) => {

    const { user:student } = useContext(MyContext)

    useEffect(() => {
        if(!!student){
            getDataSubmission();
        }
    }, [student])

    const [submission, setSubmission] = useState<SubmissionModel>()
    const [resources, setResources] = useState<SubmissionResourceModel[]>()


    const router = useRouter()

    const goToSubmissionById = () => {
        router.push(`/my/course/module/activity/submission/${submission?.id}`)
    }

    const getDataSubmission = async () => {
        const { data:sub } = await enagApi.get<SubmissionModel>(`/submissions/student_id=${student?.id}&activity_id=${activity.id}`)
        const { data:reso } = await enagApi.get<SubmissionResourceModel[]>(`/submissions/resources/submission_id=${sub.id}`)
        setSubmission(sub)
        setResources(reso)
    }

    return (
        <Container className='container bg-primary'>
            <Typography variant='h3' >
                {activity.title}
            </Typography>
            <Typography variant='h3' >
                Estado de la actividad
            </Typography>
            <Button variant='contained' onClick={goToSubmissionById} >
                Agregar entrega
            </Button>
            <TableContainer component={Paper}>
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
                            <TableCell className='text-start' > {submission?.state_gra}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width={300} >
                                Archivos enviados
                            </TableCell>
                            <TableCell className='text-start' > 
                                {
                                    (resources?.length==0) ? 
                                    (<span> No hay archivos </span>)
                                    :(resources?.map((resource)=>( <li key={resource.id} > {resource.title} </li> )))
                                }
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width={300} >
                                Observaciones
                            </TableCell>
                            <TableCell className='text-start' > {submission?.comment} </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    )
}
