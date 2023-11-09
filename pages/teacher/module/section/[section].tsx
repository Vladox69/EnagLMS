import { Layout } from '@/components/layouts';
import React, { useState } from 'react'
import { Container, Typography, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ActivityModel, SectionModel, SectionResourceModel } from '@/models';
import { enagApi } from '@/apis';
import { GridTActivity } from '@/components/teacher/Activity/GridTActivity';
import { GridTResource } from '@/components/teacher/Sections/Resource/GridTResource';
import { useRouter } from 'next/router';
import { FormTResource } from '../../../../components/teacher/Sections/Resource/FormTResource';

interface Props {
    section: SectionModel,
    activities: ActivityModel[]
    resources: SectionResourceModel[]
}

export const TeacherSectionById: NextPage<Props> = ({ section, activities, resources }) => {

    const router = useRouter()

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    const handleFormSubmit = (formData: any) => {
        if (formData.status == 200) {
            //TODO: Rehidratación de la página añadir a la lista el nuevo recurso       
            handleClose();
        } else {

        }
    }

    const goToNewActivity = () => {
        const { section: id } = router.query;
        router.push({
            pathname: '/teacher/module/section/activity/new',
            query: { section_id: id }
        });
    }

    // const goToNewResource=()=>{
    //     const {section:id}=router.query;
    //     router.push({
    //         pathname:'/teacher/module/section/resource/new',
    //         query:{section_id:id}
    //     });
    // }

    return (
        <Layout title='Teacher section'>
            <Container className='container bg-primary'>
                <Container className='container bg-danger'>
                    <Typography component='p' > Título de la sección </Typography>
                    <Typography component='p' >{section.title} </Typography>
                    <Typography component='p' > Contenido de la sección </Typography>
                    <Container component='div' dangerouslySetInnerHTML={{
                        __html: section.content
                    }} />

                    <Typography component='p' > Recursos </Typography>
                    {/* <Button variant='contained' onClick={goToNewResource} >Nuevo recurso</Button> */}
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                        <DialogTitle id="form-dialog-title">Nuevo recurso</DialogTitle>
                        <DialogContent>
                            <FormTResource section_id={section.id}  onSubmitResource={handleFormSubmit} />
                        </DialogContent>
                    </Dialog>
                    <Button variant='contained' onClick={handleOpen} >Nuevo recurso</Button>
                    <GridTResource section_resources={resources} />

                    <Typography component='p' > Actividades </Typography>
                    <Button variant='contained' onClick={goToNewActivity} >Nueva actividad</Button>
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
    const { section: id } = params as { section: string };
    const { data: section } = await enagApi.get<SectionModel>(`/sections/section_id=${id}`);
    const { data: activities } = await enagApi.get<ActivityModel[]>(`/activities/section_id=${id}`);
    const { data: resources } = await enagApi.get<SectionResourceModel[]>(`/sections/resources/section_id=${id}`);
    return {
        props: {
            section,
            activities,
            resources
        }
    }

}

export default TeacherSectionById;