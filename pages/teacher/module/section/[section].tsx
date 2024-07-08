import { Layout } from '@/components/layouts';
import React, { useEffect, useState } from 'react'
import { Container, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, CircularProgress, Box } from '@mui/material';
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

export const TeacherSectionById: NextPage<Props> = ({ }) => {

    const router = useRouter()

    const [section, setSection] = useState<SectionModel>()
    const [activities, setActivities] = useState<ActivityModel[]>([])
    const [resources, setResources] = useState<SectionResourceModel[]>([])

    useEffect(() => {
        if (router.isReady) {
            getData()
        }
    }, [router.isReady])


    const getData = async () => {
        const { section: id } = router.query
        const { data: sect } = await enagApi.get<SectionModel>(`/sections/section_id=${id}`);
        const { data: acts } = await enagApi.get<ActivityModel[]>(`/activities/section_id=${id}`);
        const { data: rescs } = await enagApi.get<SectionResourceModel[]>(`/sections/resources/section_id=${id}`);
        setSection(sect)
        setActivities(acts)
        setResources(rescs)
    }


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

    return (
        <Layout title='Teacher section'>
            <Container className='container'>
                {
                    (section == undefined || activities == undefined || resources == undefined) ?
                        (<Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            minHeight="80vh"
                        >
                            <CircularProgress size={100} color='error' />
                        </Box>) : (
                            <Container className='container '>
                                <Typography variant='h3' > {section.title} </Typography>
                                <Typography component='p' dangerouslySetInnerHTML={{
                                    __html: section.content
                                }} />

                                <Typography variant='h5' > Recursos </Typography>
                                {/* <Button variant='contained' onClick={goToNewResource} >Nuevo recurso</Button> */}
                                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                                    <DialogTitle id="form-dialog-title" className='text-center' >Formulario de nuevo recurso</DialogTitle>
                                    <DialogContent>
                                        <FormTResource section_id={section.id} onSubmitResource={handleFormSubmit} onCancel={handleClose} />
                                    </DialogContent>
                                </Dialog>
                                <GridTResource section_resources={resources} />
                                <Button variant='contained' color='error' className='my-2' onClick={handleOpen} >Nuevo recurso</Button>

                                <Typography variant='h5' > Actividades </Typography>
                                <GridTActivity activities={activities} />
                                <Button variant='contained' color='error' className='my-2' onClick={goToNewActivity} >Nueva actividad</Button>

                            </Container>
                        )
                }

            </Container>
        </Layout>
    )
}

export default TeacherSectionById;