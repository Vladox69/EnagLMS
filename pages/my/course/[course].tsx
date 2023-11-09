import { Layout } from '@/components/layouts'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Container, Typography,  } from '@mui/material';


import { GridCourse } from '../../../components/my/GridCourse';
import enagApi from '../../../apis/enagApi';
import { ModuleModel } from '@/models';

interface Props {
    course: string;
    modulos: ModuleModel[];
}

export const MyCourseByName: NextPage<Props> = ({ course, modulos }) => {
    return (
        <Layout title='My Course'>
            <Container className='container bg-primary'>
                <Typography variant='h2' >
                    Información del curso
                </Typography>

                <Typography component='p' >
                    Bienvenidos a al {course}
                </Typography>
                <Typography variant='h2' >
                    Información del curso
                </Typography>

                <GridCourse modules={modulos} />
            </Container>

        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const course = []

    const data: any[] = [

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
    const { data: modulos } = await enagApi.get<ModuleModel[]>(`/modules/course_id=${course}`)

    return {
        props: {
            course,
            modulos
        }
    }

}

export default MyCourseByName;