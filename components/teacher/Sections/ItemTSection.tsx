import React, { FC } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import { Container, Typography, IconButton } from '@mui/material';
import { SectionModel } from '@/models';
import { useRouter } from 'next/router';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    section: SectionModel
}

export const ItemTSection: FC<Props> = ({ section }) => {
    const router = useRouter();

    const goToEditSection = (section_id: number) => {
        router.push({
            pathname: `/teacher/module/section/edit`,
            query: { section_id }
        })
    }

    const goToSection = () => {
        router.push(`/teacher/module/section/${section.id}`)
    }

    return (
        <>
            <Container className='container bg-danger d-flex' component='div' onClick={goToSection} >
                <ArticleIcon sx={{
                    width: 50,
                    height: 50
                }} />
                <Typography component='p' > {section.title} </Typography>

            </Container>
            <IconButton onClick={() => goToEditSection(section.id)}>
                <SettingsIcon />
            </IconButton>

            <IconButton>
                <DeleteIcon />
            </IconButton>
        </>
    )
}
