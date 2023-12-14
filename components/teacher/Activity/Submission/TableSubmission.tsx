import { SubmissionStudentI } from '@/interface/submission_student'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import React, { FC } from 'react'
import { useRouter } from 'next/router';
import { handleDownload } from '@/utils/file/handleDownload';

interface Props {
    submissions: SubmissionStudentI[]
}

export const TableSubmission: FC<Props> = ({ submissions }) => {

    const router = useRouter()

    const goToQualify = (id: number) => {
        router.push(`/teacher/module/section/activity/submission/${id}`)
    }

    return (
        <TableContainer component={Paper} className='border'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >Estudiante</TableCell>
                        <TableCell >Calificación</TableCell>
                        <TableCell >Entrega</TableCell>
                        <TableCell > - </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {submissions.map((submission) => (
                        <TableRow
                            key={submission.id_submission}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {submission.student}
                            </TableCell>
                            <TableCell >{  submission.submission.state_gra=='Sin calificar' ? submission.submission.state_gra : submission.submission.grade }</TableCell>
                            <TableCell >
                                {
                                    submission.resources.length == 0 ?
                                        (<span>No entregado</span>)
                                        :
                                        (submission.resources.map((resource) => (
                                            <li key={resource.id} onClick={() => handleDownload(resource.url_resource, resource.title)} >
                                                <span  >
                                                    {resource.title}
                                                </span>
                                                <br />
                                            </li>
                                        )))
                                }
                            </TableCell>
                            <TableCell > <Button variant='contained' color='error' onClick={() => goToQualify(submission.id_submission)} > Calificar </Button> </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
