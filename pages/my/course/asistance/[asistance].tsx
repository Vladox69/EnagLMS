import { enagApi } from '@/apis';
import { Layout } from '@/components/layouts'
import { AsistanceModel, AsistanceRegisterModel } from '@/models';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import {  NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

interface Props {
    asistances: AsistanceModel[]
}


export const MyAsistanceById: NextPage<Props> = ({ }) => {

    const router = useRouter()
    const [registers, setRegisters] = useState<AsistanceRegisterModel[]>([])
    const [asistances, setAsistances] = useState<AsistanceModel[]>([])
    useEffect(() => {
        if (router.isReady) {
            getData()
        }
    }, [router.isReady])

    const getData = async () => {
        const { asistance } = router.query
        const qp = (asistance ?? '').toString().split('&')
        const [q1, q2] = qp
        const student_id = q1.substring(q1.indexOf('=') + 1)
        const module_id = q2.substring(q2.indexOf('=') + 1)
        const { data: ass } = await enagApi.get<AsistanceModel[]>(`/asistances/module_id=${module_id}`)
        let registerPromises: any[] = []
        for (const asistance of ass) {
            const { data: ra } = await enagApi.get(`/asistances/registers/asistance_id=${asistance.id}&student_id=${student_id}`)
            registerPromises.push(ra)
        }
        const rgs = await Promise.all(registerPromises)
        setRegisters(rgs)
        setAsistances(ass)
    }


    return (
        <Layout>
            <Container className='container ' >
                <Typography variant='h4'  > Tabla de asistencias </Typography>
                <TableContainer component={Paper} className='border rounded' >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <caption>
                            <ul>
                                <li className='list-group-item'>
                                    Porcentaje de asistencia el curso
                                </li>
                                <li className='list-group-item'>
                                    100%
                                </li>
                            </ul>
                        </caption>
                        <TableHead>
                            <TableRow>
                                <TableCell>Fecha</TableCell>
                                <TableCell align="right">Descripción</TableCell>
                                <TableCell align="right">Estado</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {registers.map((register) => (
                                <TableRow
                                    key={register.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {asistances.find((as) => (as.id == register.asistance_id))?.date.toString().substring(0, asistances.find((as) => (as.id == register.asistance_id))?.date.toString().indexOf('T'))}
                                    </TableCell>
                                    <TableCell align="right"> {asistances.find((as) => (as.id == register.asistance_id))?.description} </TableCell>
                                    <TableCell align="right">{register.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>

            </Container>

        </Layout>
    )
}


export default MyAsistanceById;