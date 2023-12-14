import { Container, Typography } from '@mui/material'
import React, { FC } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import { useRouter } from 'next/router';
import { ActivityModel } from '@/models';
import styles from '@/styles/Custom.module.css'

interface Props{
    activity:ActivityModel;
}

export const ItemActivity:FC<Props> = ({activity}) => {

    const router =useRouter();

    const goToActivityById=()=>{
        router.push(`/my/course/module/activity/${activity.id}`)
    }

    return (
        <Container className={styles.hover_effect+' container d-flex align-items-center mb-2 border rounded'} component='div' onClick={goToActivityById} >
            <ArticleIcon sx={{
                width: 50,
                height: 50
            }} />
            <Typography component='p' className=''>{activity.title} </Typography>
        </Container>
    )
}
