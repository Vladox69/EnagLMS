import { enagApi } from '@/apis';
import { Layout } from '@/components/layouts'
import { AsistanceModel } from '@/models';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'

interface Props {
    asistances: AsistanceModel[]
}


export const MyAsistanceById: NextPage<Props> = ({ asistances }) => {
    
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
                            {asistances.map((asistance) => (
                                <TableRow
                                    key={asistance.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {asistance.date.toLocaleString()}
                                    </TableCell>
                                    <TableCell align="right">sss</TableCell>
                                    <TableCell align="right">{asistance.date.toString() }</TableCell>
                                    <TableCell align="right">{asistance.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>

            </Container>

        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const data: any[] = []

    return {
        paths: data.map(a => ({
            params: { asistance: a.asistance }
        })),
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { asistance } = params as { asistance: string };

    const regex = /^student_id=([0-9]+)&module_id=([0-9]+)$/;
    const isValid = regex.test(asistance);
    if (isValid) {
        const {data:asistances} = await enagApi.get<AsistanceModel[]>(`/asistances/${asistance}`);
        
        if (!asistances) {
            return {
                redirect: {
                    destination: `/my`,
                    permanent: false
                }
            }
        }
        return {
            props: {
               asistances
            }
        }
    } else {
        return {
            redirect: {
                destination: `/my`,
                permanent: false
            }
        }
    }

}

export default MyAsistanceById;