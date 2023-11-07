import { SubmissionStudentI } from '@/interface/submission_student'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import React, { FC } from 'react'
import { useRouter } from 'next/router';

interface Props {
    submissions: SubmissionStudentI[]
}

export const TableSubmission: FC<Props> = ({ submissions }) => {

    const router = useRouter()

    const goToQualify=(id:number)=>{
        router.push(`/teacher/module/section/activity/submission/${id}`)
    }

    return (
        <TableContainer component={Paper}>
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
                            <TableCell >{submission.grade}</TableCell>
                            <TableCell >{submission.resource}</TableCell>
                            <TableCell > <Button variant='contained' color='primary' onClick={()=>goToQualify(submission.id_submission)} > Calificar </Button> </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
