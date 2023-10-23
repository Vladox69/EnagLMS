import { enagApi } from '@/apis';
import { MyContext } from '@/context/my';
import { ActivityModel, SubmissionModel } from '@/models';
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC, useContext, useEffect, useState } from 'react'

interface Props {
    activity: ActivityModel
}

export const Activity: FC<Props> = ({ activity }) => {

    useEffect(() => {
        getDataSubmission();
    }, [])

    const [submission, setSubmission] = useState<SubmissionModel>();

    const {user:student} = useContext(MyContext)

    const router = useRouter()

    const goToSubmissionById = () => {
        router.push(`/my/course/submission/${submission?.id}`)
    }

    const getDataSubmission = async () => {

        const { data } = await enagApi.get<SubmissionModel>(`/submissions/student_id=${student?.id}&activity_id=${activity.id}`)
        setSubmission(data)
    }

    return (
        <Container className='container bg-primary'>
            <Typography variant='h3' >
                Nombre de la actividad {activity.title}
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
                            <TableCell className='text-start' > Enviado para calificar </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width={300} >
                                Estado de la calificación
                            </TableCell>
                            <TableCell className='text-start' > {submission?.grade}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell width={300} >
                                Estado de la entrega
                            </TableCell>
                            <TableCell className='text-start' > Sin entregar </TableCell>
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
