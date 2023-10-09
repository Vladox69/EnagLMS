import { Layout } from '@/components/layouts'
import { Asistance } from '@/interface';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import { Container } from 'react-bootstrap';


const rows: Asistance[] = [
    {
        _id: '1111',
        course_id: '111',
        fecha: '22-02-2023',
        state: 'Presente',
        student_id: '123'
    }
];


export default function MyAsistance() {
    return (
        <Layout>
            <Container className='container bg-primary ' >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <caption>
                            <ol>
                                <li>
                                    Porcentaje de asistencia el curso
                                </li>
                                <li>
                                    sss
                                </li>
                            </ol>
                        </caption>
                        <TableHead>
                            <TableRow>
                                <TableCell>Fecha</TableCell>
                                <TableCell align="right">Descripción</TableCell>
                                <TableCell align="right">Estado&nbsp;(g)</TableCell>
                                <TableCell align="right">Observaciones&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.fecha}
                                    </TableCell>
                                    <TableCell align="right">sss</TableCell>
                                    <TableCell align="right">{row.state}</TableCell>
                                    <TableCell align="right">sss</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>

            </Container>

        </Layout>
    )
}
