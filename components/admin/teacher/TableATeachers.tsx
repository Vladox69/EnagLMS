import { TeacherModel } from '@/models'
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import React, { FC } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

interface Props {
  teachers: TeacherModel[]
}

export const TableATeachers: FC<Props> = ({ teachers }) => {

  const router= useRouter()
  const goToNewTeacher=()=>{
    router.push(`/admin/teachers/new`)
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
                <IconButton aria-label="delete" size="medium">
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
