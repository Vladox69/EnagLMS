import React, { FC, useState } from 'react'
import { Typography, IconButton, Box, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { ModuleModel } from '@/models';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormAModule } from './FormAModule';
import Swal from 'sweetalert2';
import { deleteModule } from '@/utils/admin/course/module/deleteModule';

interface Props {
  module: ModuleModel,
  onDelteModule: (module: ModuleModel) => void,
  onUpdateModule: (module: ModuleModel) => void
}

export const ItemAModule: FC<Props> = ({ module, onUpdateModule, onDelteModule }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleFormSubmit = async (formData: any) => {
    if (formData.status == 200) {
      const { data } = formData;
      handleClose()
      Swal.fire({
        icon: 'success',
        title: 'Datos guardados',
      }).then(() => {
        onUpdateModule(data)
      })
    }
  }

  const handleDelete = () => {
    let res: any;
    Swal.fire({
      icon: 'question',
      title: '¿Está seguro de eliminar?',
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteModule(module);
        if (res.status == 200) {
          Swal.fire({
            icon: 'success',
            title: 'Datos eliminados',
          }).then(() => {
            onDelteModule(module)
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
    <Box className='d-flex justify-content-between' >
      <Typography component='p' > {module.title} </Typography>
      <Box>
        <IconButton onClick={handleOpen} >
          <EditIcon />
        </IconButton>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
          <DialogTitle id="form-dialog-title">Nuevo recurso</DialogTitle>
          <DialogContent>
            <FormAModule module_id={module.id} onSubmitResource={handleFormSubmit} />
          </DialogContent>
        </Dialog>
        <IconButton onClick={handleDelete} >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
