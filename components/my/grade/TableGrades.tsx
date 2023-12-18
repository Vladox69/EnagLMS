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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <caption>Total del módulo {total} </caption>
                    <TableHead>
                        <TableRow>
                            <TableCell>Actividad</TableCell>
                            <TableCell align="right">Ponderación</TableCell>
                            <TableCell align="right">Calificación</TableCell>
                            <TableCell align="right">Observaciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {grades.sections.map((section) => (
                            <>
                                <TableRow >
                                    <Typography className='ms-2'>{section.title}</Typography>
                                </TableRow>
                                {section.activities.map((activity) => (
                                    <TableRow>
                                        <TableCell>{activity.title}</TableCell>
                                        <TableCell align="right">{40}</TableCell>
                                        <TableCell align="right">{activity.submission.grade}</TableCell>
                                        <TableCell align="right">{activity.submission.comment}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <Typography className='fw-bold ms-2'>Total {section.total}</Typography>
                                </TableRow>
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
