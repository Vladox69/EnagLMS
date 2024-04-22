import React, { useEffect, useState } from 'react'
import { Layout } from '@/components/layouts';
import { Box, Button, CircularProgress, Container, Typography } from '@mui/material';
import { NextPage } from 'next';
import { enagApi } from '@/apis';
import { ModuleModel, SectionModel, TeacherModel } from '@/models';
import ArticleIcon from '@mui/icons-material/Article';
import { useRouter } from 'next/router';
import { GridTSection } from '../../../components/teacher/Sections/GridTSection';
import styles from '@/styles/Custom.module.css'
import { CustomDialog } from '@/components/my/CustomDialog';

interface Props {
    sections: SectionModel[]
}

export const TeacherModuleById: NextPage<Props> = ({ }) => {

    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            getData()
        }
    }, [router.isReady])


    const [openPlanificacion, setPlanificacion] = useState(false)
    const [openDocente, setDocente] = useState(false)
    const [sections, setSections] = useState<SectionModel[]>([])
    const [module, setModule] = useState<ModuleModel>()
    const [teacher, setTeacher] = useState<TeacherModel>()
    const getData = async () => {
        const { module } = router.query
        const {data:p}=await enagApi.get(`/auth/profile`)
        const {data:t}=await enagApi.get<TeacherModel>(`/teachers/user_id=${p.user_id}`)
        const { data: s } = await enagApi.get<SectionModel[]>(`/sections/module_id=${module}`);
        const {data:m}=await enagApi.get<ModuleModel>(`/modules/module_id=${module}`);
        setTeacher(t)
        setSections(s)
        setModule(m)
    }

    const handleOpenPlanificacion = () => {
        setPlanificacion(true)
    }

    const handleClosePlanificacion = () => {
        setPlanificacion(false)
    }

    const handleOpenDocente = () => {
        setDocente(true)
    }

    const handleCloseDocente = () => {
        setDocente(false)
    }

    const goToAsistance = () => {
        const { module } = router.query
        router.push(`/teacher/module/asistance/${module}`)
    }

    const goToNewSection = () => {
        const { module } = router.query
        router.push({
            pathname: '/teacher/module/section/new',
            query: { module_id: module }
        })
    }

    return (
        <Layout title='My teacher module'>
            {
                (teacher==undefined||module==undefined||sections==undefined)?
                (<Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="80vh" 
                >
                    <CircularProgress size={100} color='error' />
                </Box>)
                :
                (            <Container className='container '>
                <Typography variant='h4' className='my-2'  > {module?.title} </Typography>
                
                <Container className={styles.hover_effect + ' container border rounded d-flex mb-2 align-items-center'} component='div' onClick={handleOpenDocente} >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' className=''> Hoja de vida del Docente </Typography>
                </Container>
                <CustomDialog open={openDocente} handleClose={handleCloseDocente} title='Hoja de vida del docente' url={teacher.cv_url} />

                <Container className={styles.hover_effect + ' container border rounded d-flex mb-2 align-items-center'} component='div' onClick={handleOpenPlanificacion} >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' >Planificación académica de la materia </Typography>
                </Container>
                <CustomDialog open={openPlanificacion} handleClose={handleClosePlanificacion} title='Planificación de la materia' url={module.img_url} />
                
                <Typography variant='h2' >
                    Asistencia
                </Typography>

                <Container className={styles.hover_effect + ' container border rounded d-flex mb-2 align-items-center'} component='div' onClick={goToAsistance} >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' >Asistencia</Typography>

                </Container>

                <Button variant='contained' color='error' className='mb-2' onClick={goToNewSection} >
                    Crear nueva sección
                </Button>
                <GridTSection sections={sections} />
            </Container>)
            }

        </Layout>
    )
}

export default TeacherModuleById;