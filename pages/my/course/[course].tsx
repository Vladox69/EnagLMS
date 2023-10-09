import { Layout } from '@/components/layouts'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Container, Typography, Divider } from '@mui/material';

import ArticleIcon from '@mui/icons-material/Article';
import { GridCourse } from '../../../components/my/GridCourse';

interface Props {
    course: string;
}

export const MyCourseByName: NextPage<Props> = ({ course }) => {
    return (
        <Layout title='My Course'>
            <Container className='container bg-primary'>
                <Typography variant='h2' >
                    Información del curso
                </Typography>

                <Typography component='p' >
                    Bienvenidos a la materia {course}
                </Typography>
                <Container className='container bg-danger d-flex ' >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' className=''> Hoja de vida del Docente </Typography>

                </Container>
                <Divider />
                <Container className='container bg-danger d-flex' >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' >Planificación académica de la materia </Typography>

                </Container>
                <Divider />

                <Typography variant='h2' >
                    Asistencia
                </Typography>

                <Container className='container bg-danger d-flex' >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' >Planificación académica de la materia </Typography>

                </Container>

                <Typography variant='h2' >
                    Información del curso
                </Typography>

                 <GridCourse />       
            </Container>

        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const course=['123','456','789']

    const data: any[] = [
        { course: 'sss' },
        { course: 'sss2' },
        { course: 'sss3' },
    ]

    return {
        paths: data.map(c => ({
            params: {
                course: c.course
            }
        })),
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { course } = params as { course: string };

    return {
        props: {
            course
        }
    }

}

export default MyCourseByName;