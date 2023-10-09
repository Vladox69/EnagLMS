import React, { FC } from 'react'
import { Container, Typography } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { GridActivity } from '../activity/';

interface Props{
  section:string
}

export const ItemSection:FC<Props> = ({section}) => {
  
  return (
    <>

      <Container className='container bg-danger d-flex ' component='div'  >
        <ArticleIcon sx={{
          width: 50,
          height: 50
        }} />
        <Typography component='p' className=''> Zona de {section} </Typography>
      </Container>
        <GridActivity />

    </>
  )
}
