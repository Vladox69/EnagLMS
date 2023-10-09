import { Container, Typography } from '@mui/material'
import React, { FC } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import { useRouter } from 'next/router';

interface Props{
    activity:string;
}

export const ItemActivity:FC<Props> = ({activity}) => {

    const router =useRouter();

    const goToActivityById=()=>{
        router.push(`/my/course/activity/${activity}`)
    }

    return (
        <Container className='container bg-danger d-flex ' component='div' onClick={goToActivityById} >
            <ArticleIcon sx={{
                width: 50,
                height: 50
            }} />
            <Typography component='p' className=''> Nombre de la {activity} </Typography>
        </Container>
    )
}
