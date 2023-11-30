import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { InternModel } from '@/models/intern';
import { CustomDialog } from '@/components/my/CustomDialog';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

interface Props{
    interns:InternModel[]
}

export const TableAIntern:FC<Props> = ({interns}) => {

  const [cv, setCv] = useState(false)

  const renderResource = (title: string,
    url: string,
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {

    const handleOpen=()=>{
        setState(!state)
    }

    const handleClose=()=>{
        setState(!state)
    }

    return (
        <p onClick={handleOpen} >
            <PictureAsPdfIcon />
            <span >{title}</span>
            <CustomDialog open={state} handleClose={handleClose} title={title} url={url} />
        </p>
    )
}


  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombres</TableCell>
            <TableCell>Célular</TableCell>
            <TableCell>Correo electrónico</TableCell>
            <TableCell>Hoja de vida</TableCell>
            <TableCell>Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {interns && interns.map((intern) => (
            <TableRow
              key={intern.id}
            >
              <TableCell >{intern.name} </TableCell>
              <TableCell >{intern.phone} </TableCell>
              <TableCell >{intern.email} </TableCell>
              <TableCell > {renderResource(`${intern.name}.pdf`, intern.cv_url, cv,setCv)} </TableCell>
              <TableCell>
                {/* <IconButton aria-label="delete" size="medium"  >
                  <EditIcon fontSize="inherit" />
                </IconButton> */}
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
