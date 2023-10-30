import { SectionResourceModel } from '@/models'
import { Container, Typography } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
import React, { FC } from 'react'

interface Props {
    section_resource: SectionResourceModel
}

export const ItemTResource: FC<Props> = ({ section_resource }) => {
    return (
        <Container className='container bg-danger d-flex' component='div'>
            <ArticleIcon sx={{
                width: 50,
                height: 50
            }} />
            <Typography component='p' > {section_resource.url_resource} </Typography>
        </Container>
    )
}
