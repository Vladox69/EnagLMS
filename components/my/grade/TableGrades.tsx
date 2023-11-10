import { Layout } from '@/components/layouts'
import { GradesI } from '@/interface'
import { Container, TableContainer, Paper, Table, TableHead, TableCell, TableRow, TableBody } from '@mui/material';
import React, { FC } from 'react'

interface Props {
    grades: GradesI
}

export const TableGrades: FC<Props> = ({ grades }) => {
    return (
        <Layout>
            <Container className='container bg-primary' >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" >
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
                                    <TableRow>{section.title}</TableRow>
                                    {section.activities.map((activity) => (
                                        <TableRow>
                                            <TableCell>{activity.title}</TableCell>
                                            <TableCell align="right">{40}</TableCell>
                                            <TableCell align="right">{activity.submission.grade}</TableCell>
                                            <TableCell align="right">{activity.submission.comment}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        Total {section.total}
                                    </TableRow>
                                </>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Layout>
    )
}
