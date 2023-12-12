import { TeacherModel } from '@/models'
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import React, { FC, useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { deleteTeacher } from '@/utils/admin/teacher/deleteTeacher';

interface Props {
  teachers: TeacherModel[]
}

export const TableATeachers: FC<Props> = ({ teachers:tchrs }) => {

  const router= useRouter()
  const [teachers, setTeachers] = useState<TeacherModel[]>([])

  useEffect(() => {
    setTeachers(tchrs)
  }, [tchrs])
  
  const handleDelete=async(teacher:any)=>{
    let res:any;
    Swal.fire({
        icon: 'question',
        title: '¿Está seguro de eliminar?',
        showConfirmButton: true,
        showDenyButton: true,
    }).then(async (result) => {
        if (result.isConfirmed) {
            res = await deleteTeacher(teacher);
            if (res.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Datos eliminados',
                }).then(() => {
                    setTeachers(teachers=>teachers.filter(t=>t.id!==teacher.id))
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

  const goToNewTeacher=()=>{
    router.push(`/admin/teachers/new`)
  }
  const goToEditTeacher=(id:number)=>{
    router.push({
      pathname:'/admin/teachers/edit',
      query:{teacher_id:id}
    })
  }

  return (
    <>
    <Button variant='contained' onClick={goToNewTeacher} > Nuevo profesor </Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombres</TableCell>
            <TableCell>Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers && teachers.map((teacher) => (
            <TableRow
              key={teacher.id}
            >
              <TableCell >{teacher.names} {teacher.last_names}</TableCell>
              <TableCell>
                <IconButton aria-label="delete" size="medium" onClick={()=>goToEditTeacher(teacher.id)} >
                  <EditIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="medium" onClick={()=>handleDelete(teacher)}>
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
