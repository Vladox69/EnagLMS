import { CourseModel } from '@/models'
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import React, { FC } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRouter } from 'next/router';

interface Props {
    courses: CourseModel[]
}

export const TableACourse: FC<Props> = ({ courses }) => {
    const router = useRouter()

    const goToNewCourse = () => {
        router.push(`/admin/courses/new`)
    }

    const goToCourse=(id:number)=>{
        router.push(`/admin/courses/${id}`)
    }

    return (
        <>
            <Button variant='contained' onClick={goToNewCourse}> Nuevo curso  </Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Título</TableCell>
                            <TableCell>Fecha de inicio</TableCell>
                            <TableCell>Fecha de fin</TableCell>
                            <TableCell>Opciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {courses && courses.map((course) => (
                            <TableRow
                                key={course.id}
                            >
                                <TableCell >{course.topic} </TableCell>
                                <TableCell >{course.start_at.toString().substring(0, course.start_at.toString().indexOf("T"))} </TableCell>
                                <TableCell >{course.end_at.toString().substring(0, course.start_at.toString().indexOf("T"))} </TableCell>
                                <TableCell>
                                    <IconButton aria-label="delete" size="medium"  onClick={()=>goToCourse(course.id)} >
                                        <PlayArrowIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="medium"  >
                                        <EditIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="medium">
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
