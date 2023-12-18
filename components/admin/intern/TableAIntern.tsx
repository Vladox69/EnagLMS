import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { InternModel } from '@/models/intern';
import { CustomDialog } from '@/components/my/CustomDialog';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Swal from 'sweetalert2';
import { deleteIntern } from '@/utils/admin/intern/deleteIntern';

interface Props {
  interns: InternModel[]
}

const InternDialog = ({ intern }: { intern: InternModel }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <>
          <p onClick={handleOpen}>
              <PictureAsPdfIcon />
              <span>{`${intern.name}.pdf`}</span>
          </p>
          <CustomDialog
              open={open}
              handleClose={handleClose}
              title={`${intern.name}.pdf`}
              url={intern.cv_url}
          />
      </>
  );
};


export const TableAIntern: FC<Props> = ({ interns: intr }) => {

  const [interns, setInterns] = useState<InternModel[]>([])
  useEffect(() => {
    setInterns(intr)
  }, [intr])

  const handleDelete = async (intern: any) => {
    let res: any;
    Swal.fire({
      icon: 'question',
      title: '¿Está seguro de eliminar?',
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteIntern(intern);
        if (res.status == 200) {
          Swal.fire({
            icon: 'success',
            title: 'Datos eliminados',
          }).then(() => {
            setInterns(interns => interns.filter(i => i.id !== intern.id))
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} className='border rounded' aria-label="simple table">
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
                <TableCell > <InternDialog intern={intern} /> </TableCell>
                <TableCell>
                  {/* <IconButton aria-label="delete" size="medium"  >
                  <EditIcon fontSize="inherit" />
                </IconButton> */}
                  <IconButton aria-label="delete" size="medium" onClick={() => handleDelete(intern)} >
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
