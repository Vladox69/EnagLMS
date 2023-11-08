import { ActivityModel } from '@/models'
import { Container, IconButton, Typography } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
import React, { FC } from 'react'
import { useRouter } from 'next/router';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import { deleteActivity } from '@/utils/activity/deleteActivity';

interface Props {
  activity: ActivityModel,
  onDeleteActivity: (activity: ActivityModel) => void
}

export const ItemTActivity: FC<Props> = ({ activity, onDeleteActivity }) => {

  const router = useRouter()

  const goToActivity = () => {
    router.push(`/teacher/module/section/activity/${activity.id}`)
  }

  const goToEditActivity = (activity_id: number) => {
    router.push({
      pathname: `/teacher/module/section/activity/edit`,
      query: { activity_id }
    })
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
        res = await deleteActivity(activity);
        if (res.status == 200) {
          Swal.fire({
            icon: 'success',
            title: 'Datos eliminados',
          }).then(() => {
            onDeleteActivity(activity)
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
    <Container className='container bg-danger d-flex justify-content-between p-0'>
      <div className='d-flex align-items-center'>
        <ArticleIcon sx={{
          width: 50,
          height: 50
        }} />
        <Typography component='p' onClick={goToActivity} > {activity.title} </Typography>
      </div>
      <div>
        <IconButton onClick={() => goToEditActivity(activity.id)} >
          <SettingsIcon />
        </IconButton>
        <IconButton onClick={handleDelete} >
          <DeleteIcon />
        </IconButton>
      </div>
    </Container>
  )
}
