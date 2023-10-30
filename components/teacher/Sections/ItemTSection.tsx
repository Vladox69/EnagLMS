import React, { FC } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import { Container, Typography } from '@mui/material';
import { SectionModel } from '@/models';
import { useRouter } from 'next/router';

interface Props {
    section: SectionModel
}

export const ItemTSection: FC<Props> = ({ section }) => {
    const router=useRouter();

    const goToSection=()=>{
        router.push(`/teacher/module/section/${section.id}`)
    }

    return (
        <Container className='container bg-danger d-flex' component='div' onClick={goToSection} >
            <ArticleIcon sx={{
                width: 50,
                height: 50
            }} />
            <Typography component='p' > {section.title} </Typography>
        </Container>
    )
}
