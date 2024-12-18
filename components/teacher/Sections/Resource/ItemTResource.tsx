import { SectionResourceModel } from '@/models'
import { Container, IconButton, Typography } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
import React, { FC, useState } from 'react'
import { handleDownload } from '@/utils/file/handleDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import { deleteSectionResource } from '@/utils/section/resource/deleteSectionResource';
import styles from '@/styles/Custom.module.css';
import { CustomDialog } from '@/components/my/CustomDialog';

interface Props {
    section_resource: SectionResourceModel,
    onDeleteResource:(section_resource:SectionResourceModel)=>void
}

export const ItemTResource: FC<Props> = ({ section_resource,onDeleteResource }) => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    if (section_resource.title.includes('.pdf')) {
      setOpen(true)
    } else {
      handleDownload(section_resource.url_resource, section_resource.title)
    }
  }

  const handleClose = () => {
    setOpen(false)
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
                res = await deleteSectionResource(section_resource);
                if (res.status == 200) {
                  Swal.fire({
                    icon: 'success',
                    title: 'Datos eliminados',
                  }).then(() => {
                    onDeleteResource(section_resource)
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
        <Container className={styles.hover_effect +' container d-flex justify-content-between p-0 border rounded'} >
            <div className='d-flex align-items-center'>
                <ArticleIcon sx={{
                    width: 50,
                    height: 50
                }} />
                <Typography component='p' onClick={handleOpen} > {section_resource.title} </Typography>
                <CustomDialog open={open}  handleClose={handleClose} title={section_resource.title} url={section_resource.url_resource} />
    
            </div>
            <div>
                <IconButton onClick={handleDelete} >
                    <DeleteIcon />
                </IconButton>
            </div>
        </Container>
    )
}
