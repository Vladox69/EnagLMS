import { Container, Typography } from '@mui/material'
import { SectionResourceModel } from '@/models'
import React, { FC } from 'react'
import ArticleIcon from '@mui/icons-material/Article';

interface Props{
    section_resource:SectionResourceModel
}

export const ItemSectionResource:FC<Props> = ({section_resource}) => {
  return (
    <Container className='container bg-danger d-flex ' component='div' >
    <ArticleIcon sx={{
        width: 50,
        height: 50
    }} />
    <Typography component='p' className=''> Nombre de la {section_resource.url_resource} </Typography>
</Container>
  )
}
