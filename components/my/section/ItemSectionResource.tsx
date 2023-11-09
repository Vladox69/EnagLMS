import { Container, Typography } from '@mui/material'
import { SectionResourceModel } from '@/models'
import React, { FC } from 'react'
import ArticleIcon from '@mui/icons-material/Article';

interface Props{
    section_resource:SectionResourceModel
}

export const ItemSectionResource:FC<Props> = ({section_resource}) => {
  return (
    <Container className='container bg-danger d-flex align-items-center' component='div' >
    <ArticleIcon sx={{
        width: 50,
        height: 50
    }} />
    <Typography component='p' className=''>{section_resource.title} </Typography>
</Container>
  )
}
