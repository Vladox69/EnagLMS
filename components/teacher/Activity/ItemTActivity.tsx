import { ActivityModel } from '@/models'
import { Container, Typography } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
import React, { FC } from 'react'

interface Props{
    activity:ActivityModel
}

export const ItemTActivity:FC<Props> = ({activity}) => {
  return (
    <Container className='container bg-danger d-flex' component='div' >
    <ArticleIcon sx={{
        width: 50,
        height: 50
    }} />
    <Typography component='p' > {activity.title} </Typography>
</Container>
  )
}
