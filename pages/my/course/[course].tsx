import { Layout } from '@/components/layouts'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Box, CircularProgress, Container, Typography, } from '@mui/material';


import { GridCourse } from '@/components/my/GridCourse';
import enagApi from '../../../apis/enagApi';
import { CourseModel, ModuleModel } from '@/models';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
    course: string;
    modulos: ModuleModel[];
}

export const MyCourseByName: NextPage<Props> = ({ }) => {

    const router = useRouter()
    const [modulos, setModulos] = useState<ModuleModel[]>([])
    const [course, setCourse] = useState<CourseModel>()
    useEffect(() => {
        if (router.isReady) {
            getData()
        }
    }, [router.isReady])


    const getData = async () => {
        const { course: id } = router.query
        const { data: c } = await enagApi.get(`/courses/course_id=${id}`)
        const { data: m } = await enagApi.get(`/modules/course_id=${id}`)
        setModulos(m)
        setCourse(c)
    }

    return (
        <Layout title='My Course'>
            {
                (course == undefined || modulos == undefined) ?
                    (
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            minHeight="80vh" // Ajusta esta altura según tus necesidades
                        >
                            <CircularProgress size={100} color='error' />
                        </Box>
                    ) : 
                    (
                        <Container className='container '>
                            <Typography variant='h2' >
                                {course?.topic}
                            </Typography>
                            <Typography component='p' dangerouslySetInnerHTML={{
                                __html: course?.content ?? ''
                            }} />

                            <GridCourse modules={modulos} />
                        </Container>
                    )
            }


        </Layout>
    )
}

export default MyCourseByName;