import { CourseModel } from '@/models'
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { deleteCourse } from '@/utils/admin/course/deleteCourse';

interface Props {
    courses: CourseModel[]
}

export const TableACourse: FC<Props> = ({ courses:crs }) => {
    const router = useRouter()

    const [courses, setCourses] = useState<CourseModel[]>([])

    useEffect(() => {
        setCourses(crs)
    }, [crs])
    

    const goToNewCourse = () => {
        router.push(`/admin/courses/new`)
    }

    const goToEditCourse=(id:number)=>{
        router.push({
            pathname: '/admin/courses/edit',
            query: { course_id: id }
        })
    }

    const goToCourse=(id:number)=>{
        router.push(`/admin/courses/${id}`)
    }

    const handleDelete = async (course: any) => {
        let res: any;
        Swal.fire({
          icon: 'question',
          title: '¿Está seguro de eliminar?',
          showConfirmButton: true,
          showDenyButton: true,
        }).then(async (result) => {
          if (result.isConfirmed) {
            res = await deleteCourse(course);
            if (res.status == 200) {
              Swal.fire({
                icon: 'success',
                title: 'Datos eliminados',
              }).then(() => {
                setCourses(courses => courses.filter(c => c.id !== course.id))
              })
            } else {
              Swal.fire({
                icon: 'error',
                title: 'No se pudo eliminar los datos',
              })
            }
          }
        })
      }


    return (
        <>
        <Typography variant='h4'> Tabla de cursos </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" className='border rounded'>
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
                                    <IconButton aria-label="delete" size="medium" onClick={()=>goToEditCourse(course.id)} >
                                        <EditIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="medium" onClick={()=>handleDelete(course)} >
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant='contained' onClick={goToNewCourse} className='mt-2' color='error' > Nuevo curso  </Button>
        </>
    )
}
