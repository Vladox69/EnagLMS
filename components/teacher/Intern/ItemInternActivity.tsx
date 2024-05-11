import { Container, Divider, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';
import { useRouter } from "next/router";
import { ActivityInternModel } from "@/models";
import Swal from "sweetalert2";
import { deleteInternActivity } from "@/utils/intern-activity/deleteInternActivty";
import styles from '@/styles/Custom.module.css'

interface Props {
  activity: ActivityInternModel
  onDeleteActivity: (activity: ActivityInternModel) => void
}

export const ItemInternActivity: FC<Props> = ({ activity,onDeleteActivity }) => {
  const router = useRouter();
  const goToInternActivity = () => {
    router.push(`/teacher/intern/activity/${activity.id}`)
  };

  const goToEditInternActivity = (activity_id: number) => {
    router.push({
      pathname: `/teacher/intern/activity/edit`,
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
        res = await deleteInternActivity(activity);
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
    <Container className={styles.hover_effect + ' container d-flex justify-content-between p-0 border rounded '}>
       <div className='d-flex align-items-center '>
        <ArticleIcon sx={{
          width: 50,
          height: 50
        }} />
        <Typography component='p' onClick={goToInternActivity} > {activity.title} </Typography>
      </div>
      <div className='d-flex align-items-center'>
        <IconButton onClick={() => goToEditInternActivity(activity.id)} >
          <SettingsIcon />
        </IconButton>
        <IconButton onClick={handleDelete} >
          <DeleteIcon />
        </IconButton>
      </div>
    </Container>
  );
};
