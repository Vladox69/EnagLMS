import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props{
  submission:string;
}

export const Activity:FC<Props> = ({submission}) => {

  const router=useRouter()

  const goToSubmissionById=()=>{
    router.push(`/my/course/submission/${submission}`)
  }

  return (
    <Container className='container bg-primary'>
                <Typography variant='h3' >
                    Nombre de la actividad
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
                                <TableCell className='text-start' > Pendiente </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell width={300} >
                                    Estado de la calificación
                                </TableCell>
                                <TableCell className='text-start' > Sin calificar</TableCell>
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
                                <TableCell className='text-start' > Escribir que se hizo mal </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </Container>
  )
}
