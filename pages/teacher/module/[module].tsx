import React, { useContext, useEffect } from 'react'
import { Layout } from '@/components/layouts';
import { Button, Container, Divider, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { enagApi } from '@/apis';
import { SectionModel } from '@/models';
import ArticleIcon from '@mui/icons-material/Article';
import { useRouter } from 'next/router';
import { GridTSection } from '../../../components/teacher/Sections/GridTSection';
import styles from '@/styles/Custom.module.css'

interface Props {
    sections: SectionModel[]
}

export const TeacherModuleById: NextPage<Props> = ({ sections }) => {

    const router = useRouter()


    const goToAsistance = () => {
        const { module } = router.query
        router.push(`/teacher/module/asistance/${module}`)
    }

    const goToNewSection=()=>{
        const { module } = router.query
        router.push({
            pathname:'/teacher/module/section/new',
            query:{module_id:module}
        })
    }

    return (
        <Layout title='My teacher module'>
            <Container className='container '>
                <Container className={ styles.hover_effect +' container border rounded d-flex mb-2 align-items-center'} component='div'  >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' className=''> Hoja de vida del Docente </Typography>

                </Container>
                <Container className={ styles.hover_effect +' container border rounded d-flex mb-2 align-items-center'} component='div'  >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' >Planificación académica de la materia </Typography>

                </Container>

                <Typography variant='h2' >
                    Asistencia
                </Typography>

                <Container className={ styles.hover_effect +' container border rounded d-flex mb-2 align-items-center'} component='div' onClick={goToAsistance} >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' >Asistencia</Typography>

                </Container>

                <Typography variant='h2' >
                    Nombre del módulo
                </Typography>
                <Button variant='contained' color='error' className='mb-2' onClick={goToNewSection} >
                    Crear nueva sección
                </Button>
                <GridTSection sections={sections} />
            </Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const data: any[] = [
    ]

    return {
        paths: data.map(m => ({
            params: {
                module: m.module
            }
        })),
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { module } = params as { module: string };
    const { data: sections } = await enagApi.get<SectionModel[]>(`/sections/module_id=${module}`);

    return {
        props: {
            sections
        }
    }

}

export default TeacherModuleById;