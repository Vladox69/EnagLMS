import { StudentQualif } from '@/pages/teacher/module/students/[students]';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { FC } from 'react'

interface Props{
    student:StudentQualif
}

export const TableStudentGrade:FC<Props> = ({student}) => {
    
    let total:number=0;
    const calculateTotal=()=>{
        student.sections.map((section)=>{
            total = total + section.total
        })
        total = total / student.sections.length;
    }
    calculateTotal();

  return (
    <>
    <hr className='m-0' />
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <caption className="fs-5" >Total del módulo {isNaN(total)?"-":total} </caption>
                    <TableHead>
                        <TableRow>
                            <TableCell className='fw-bold'>Actividad</TableCell>
                            <TableCell className='fw-bold' align="right">Ponderación</TableCell>
                            <TableCell className='fw-bold' align="right">Calificación</TableCell>
                            <TableCell className='fw-bold' >Observaciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {student.sections.map((section) => (
                            <>
                                <TableRow key={section.id} >
                                    <Typography className='ms-2 fw-bold' variant="h6" >{section.title}</Typography>
                                </TableRow>
                                {section.activities.map((activity) => (
                                    <TableRow key={activity.id}>
                                        <TableCell>{activity.title}</TableCell>
                                        <TableCell align="right">{activity.ponderation}</TableCell>
                                        <TableCell align="right">{activity.submission.grade}</TableCell>
                                        <TableCell dangerouslySetInnerHTML={{
                                            __html:activity.submission.comment
                                        }} />
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <Typography className='fw-bold ms-2' variant="h6">Total {isNaN(section.total)? "-":section.total}</Typography>
                                </TableRow>
                            </>
                        ))}
                    </TableBody>
                </Table>
    </>
  )
}
