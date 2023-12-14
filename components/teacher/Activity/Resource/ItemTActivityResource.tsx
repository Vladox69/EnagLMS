import { Container, IconButton, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';
import React,{FC} from 'react'
import { ActivityResourceModel } from '@/models';
import { handleDownload } from '@/utils/file/handleDownload';
import Swal from 'sweetalert2';
import { deleteActivityResource } from '@/utils/activity/resource/deleteActivityResource';
import styles from '@/styles/Custom.module.css';

interface Props{
    activity_resource:ActivityResourceModel,
    onDeleteResource:(activity_resource:ActivityResourceModel)=>void
}

export const ItemTActivityResource:FC<Props> = ({activity_resource,onDeleteResource}) => {

    const handleDelete=()=>{
        let res:any;
        Swal.fire({
            icon: 'question',
            title: '¿Está seguro de eliminar?',
            showConfirmButton: true,
            showDenyButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                res = await deleteActivityResource(activity_resource);
                if (res.status == 200) {
                  Swal.fire({
                    icon: 'success',
                    title: 'Datos eliminados',
                  }).then(() => {
                    onDeleteResource(activity_resource)
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
    <Container className={styles.hover_effect +' container  d-flex justify-content-between p-0 border rounded'} >
            <div className='d-flex align-items-center'>
                <ArticleIcon sx={{
                    width: 50,
                    height: 50
                }} />
                <Typography component='p' onClick={()=>handleDownload(activity_resource.url_resource,activity_resource.title)} > {activity_resource.title} </Typography>
            </div>
            <div className='d-flex align-items-center'>
                <IconButton onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </Container>
  )
}
