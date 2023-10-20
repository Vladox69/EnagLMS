import { Container, Typography } from '@mui/material'
import React, { FC } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import { useRouter } from 'next/router';
import { ActivityModel } from '@/models';

interface Props{
    activity:ActivityModel;
}

export const ItemActivity:FC<Props> = ({activity}) => {

    const router =useRouter();

    const goToActivityById=()=>{
        router.push(`/my/course/activity/${activity.id}`)
    }

    return (
        <Container className='container bg-danger d-flex ' component='div' onClick={goToActivityById} >
            <ArticleIcon sx={{
                width: 50,
                height: 50
            }} />
            <Typography component='p' className=''> Nombre de la {activity.title} </Typography>
        </Container>
    )
}
