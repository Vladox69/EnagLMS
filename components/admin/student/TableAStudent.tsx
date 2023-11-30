import { StudentModel } from '@/models'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface Props{
    students:StudentModel[]
}

export const TableAStudent:FC<Props> = ({students}) => {
  
    const router=useRouter()

    const goToNewStudent=()=>{
        router.push(`/admin/students/new`)
    }
  
    const goToEditStudent=(id:number)=>{
        router.push({
            pathname:'/admin/students/edit',
            query:{student_id:id}
        })
    }

    return (
    <>
    <Button variant='contained' onClick={goToNewStudent} >Nuevo estudiante</Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                <IconButton aria-label="delete" size="medium" onClick={()=>goToEditStudent(student.id)} >
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
