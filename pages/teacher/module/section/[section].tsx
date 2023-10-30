import { Layout } from '@/components/layouts';
import React from 'react'
import { Container, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ActivityModel, SectionModel, SectionResourceModel } from '@/models';
import { enagApi } from '@/apis';
import { GridTActivity } from '../../../../components/teacher/Activity/GridTActivity';
import { GridTResource } from '../../../../components/teacher/Sections/Resource/GridTResource';

interface Props{
    section:SectionModel,
    activities:ActivityModel[]
    resources:SectionResourceModel[]
}

export const TeacherSectionById:NextPage<Props> = ({section,activities,resources}) => {
  return (
    <Layout title='Teacher section'>
        <Container className='container bg-primary'>
            <Container className='container bg-danger'>
                <Typography component='p' > Título de la sección </Typography>
                <Typography component='p' >{section.title} </Typography>
                <Typography component='p' > Contenido de la sección </Typography>
                <Typography component='p' > {section.content} </Typography>

                <Typography component='p' > Recursos </Typography>
                <GridTResource section_resources={resources} />

                <Typography component='p' > Actividades </Typography>
                <GridTActivity activities={activities} />
            </Container>
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
                section: m.section
            }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { section:id } = params as { section: string };
    const { data: section } = await enagApi.get<SectionModel>(`/sections/section_id=${id}`);
    const {data:activities}=await enagApi.get<ActivityModel[]>(`/activities/section_id=${id}`);
    const {data:resources}=await enagApi.get<SectionResourceModel[]>(`/sections/resources/section_id=${id}`);
    return {
        props: {
            section,
            activities,
            resources
        }
    }

}

export default TeacherSectionById;