import React, { FC, useState } from 'react'
import { Typography, IconButton, Box, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { ModuleModel } from '@/models';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormAModule } from './FormAModule';
import Swal from 'sweetalert2';
import { deleteModule } from '@/utils/admin/course/module/deleteModule';
import styles from '@/styles/Custom.module.css'

interface Props {
  module: ModuleModel,
  onDelteModule: (module: ModuleModel) => void,
  onUpdateModule: (module: ModuleModel) => void,
  is_start:boolean
}

export const ItemAModule: FC<Props> = ({ module, onUpdateModule, onDelteModule,is_start }) => {
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
    <Box className={ styles.hover_effect+ ' d-flex justify-content-between border rounded py-1 mb-2' } >
      <Typography component='p' className='ms-2'> {module.title} </Typography>
      <Box>
        <IconButton onClick={handleOpen} className={!is_start?'visible':'invisible'} >
          <EditIcon />
        </IconButton>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
          <DialogTitle id="form-dialog-title">Datos del módulo</DialogTitle>
          <DialogContent>
            {/* <FormAModule module_id={module.id} onSubmitResource={handleFormSubmit} onCancel={handleClose} /> */}
          </DialogContent>
        </Dialog>
        <IconButton onClick={handleDelete} className={!is_start?'visible':'invisible'} >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
