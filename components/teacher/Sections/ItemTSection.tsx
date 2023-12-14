import React, { FC } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import { Container, Typography, IconButton } from '@mui/material';
import { SectionModel } from '@/models';
import { useRouter } from 'next/router';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '@/styles/Custom.module.css';

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
        <Container className={styles.hover_effect + ' container border rounded d-flex justify-content-between'}>
            <div className='d-flex align-items-center' onClick={goToSection} >
                <ArticleIcon sx={{
                    width: 50,
                    height: 50
                }} />
                <Typography component='p' > {section.title} </Typography>
            </div>
            <div className='d-flex align-items-center'>
                <IconButton onClick={() => goToEditSection(section.id)}>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </div>
        </Container>

    )
}
