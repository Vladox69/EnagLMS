import { StudentModel } from '@/models'
import { useRouter } from 'next/router'
import React, { useEffect, FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import { deleteStudent } from '@/utils/admin/student/deleteStudent';

interface Props {
  students: StudentModel[]
}

export const TableAStudent: FC<Props> = ({ students: stdnts }) => {

  const router = useRouter()
  const [students, setStudents] = useState<StudentModel[]>([])

  useEffect(() => {
    setStudents(stdnts)
  }, [stdnts])



  const handleDelete = async (student: any) => {
    let res: any;
    Swal.fire({
      icon: 'question',
      title: '¿Está seguro de eliminar?',
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteStudent(student);
        if (res.status == 200) {
          Swal.fire({
            icon: 'success',
            title: 'Datos eliminados',
          }).then(() => {
            setStudents(students => students.filter(s => s.id !== student.id))
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

  const goToNewStudent = () => {
    router.push(`/admin/students/new`)
  }

  const goToEditStudent = (id: number) => {
    router.push({
      pathname: '/admin/students/edit',
      query: { student_id: id }
    })
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Typography variant='h4'> Tabla de estudiantes </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className='border rounded'>
          <TableHead>
            <TableRow>
              <TableCell>Nombres</TableCell>
              <TableCell>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students && students.map((student) => (
              <TableRow
                key={student.id}
              >
                <TableCell >{student.names} {student.last_names}</TableCell>
                <TableCell>
                  <IconButton aria-label="delete" size="medium" onClick={() => goToEditStudent(student.id)} >
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="delete" size="medium" onClick={() => handleDelete(student)} >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant='contained' className='mt-2' color='error' onClick={goToNewStudent} >Nuevo estudiante</Button>

    </>
  )
}
