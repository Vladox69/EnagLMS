import { GradesI } from '@/interface'
import { TableContainer, Paper, Table, TableHead, TableCell, TableRow, TableBody, Typography } from '@mui/material';
import React, { FC, useEffect } from 'react'

interface Props {
    grades: GradesI
}

export const TableGrades: FC<Props> = ({ grades }) => {
    let total: number = 0;

    const calculateTotal = () => {
        grades.sections.map((section) => {
            total = total + section.total;
        })
        total = total / grades.sections.length;
    }

    calculateTotal();

    return (
        <>
            <Typography className='mb-2' variant='h4'> Notas por módulo </Typography>
            <TableContainer component={Paper} className='border'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <caption className="fs-5">Total del módulo {isNaN(total)?"-":total} </caption>
                    <TableHead>
                        <TableRow>
                            <TableCell className='fw-bold' >Actividad</TableCell>
                            <TableCell className='fw-bold' align="right">Ponderación</TableCell>
                            <TableCell className='fw-bold' align="right">Calificación</TableCell>
                            <TableCell className='fw-bold' align="right">Observaciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {grades.sections.map((section) => (
                            <>
                                <TableRow >
                                    <Typography className='ms-2 fw-bold' variant="h6">{section.title}</Typography>
                                </TableRow>
                                {section.activities.map((activity) => (
                                    <TableRow key={activity.id}>
                                        <TableCell>{activity.title}</TableCell>
                                        <TableCell align="right">{activity.ponderation}</TableCell>
                                        <TableCell align="right">{activity.submission.grade}</TableCell>
                                        <TableCell align="right" dangerouslySetInnerHTML={{
                                            __html:activity.submission.comment
                                        }} />
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <Typography className='fw-bold ms-2'>Total {isNaN(section.total)? "-":section.total}</Typography>
                                </TableRow>
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
