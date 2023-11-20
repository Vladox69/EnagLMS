import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { Container, Typography, Divider} from '@mui/material';
import { GridSection } from '../../../../components/my/section/';
import ArticleIcon from '@mui/icons-material/Article';
import { useRouter } from 'next/router';
import { enagApi } from '@/apis';
import { ModuleModel, ModuleResourceModel, SectionModel, TeacherModel } from '@/models';
import { useContext, useState } from 'react';
import { MyContext } from '@/context/my';
import ViewListIcon from '@mui/icons-material/ViewList';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { CustomDialog } from '../../../../components/my/CustomDialog';

interface Props {
    module: string;
    sections: SectionModel[];
    teacher:TeacherModel;
    resources:ModuleResourceModel[]
}

export const MyModuleByName: NextPage<Props> = ({ module, sections,teacher,resources }) => {
    const router = useRouter();

    const { user } = useContext(MyContext)
    const [openPlanificacion, setPlanificacion] = useState(false)
    const [openDocente, setDocente] = useState(false)

    const handleOpenPlanificacion=()=>{
        setPlanificacion(true)
    }

    const handleClosePlanificacion=()=>{
        setPlanificacion(false)
    }

    const handleOpenDocente=()=>{
        setDocente(true)
    }

    const handleCloseDocente=()=>{
        setDocente(false)
    }

    const goToAsistance = () => {
        router.push(`/my/course/asistance/student_id=${user?.id}&module_id=${module}`);
    }

    const goToGrades = () => {
        router.push(`/my/course/module/grade/student_id=${user?.id}&module_id=${module}`)
    }

    return (
        <Layout title='My Module'>
            <Container className='container bg-primary'  >
                <Container className='container bg-danger d-flex ' component='div'  onClick={handleOpenDocente} >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' className=''> Hoja de vida del Docente </Typography>
                </Container>
                <CustomDialog open={openDocente} handleClose={handleCloseDocente} title='Hoja de vida del docente' url={teacher.cv_url} />   

                <Divider />
                <Container className='container bg-danger d-flex align-items-center' component='div' onClick={handleOpenPlanificacion} >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' >Planificación académica de la materia </Typography>

                </Container>
                <CustomDialog open={openPlanificacion} handleClose={handleClosePlanificacion} title='Planificación de la materia' url='' />   
                <Divider />

                <Typography variant='h2' >
                    Asistencias
                </Typography>

                <Container className='container bg-danger d-flex align-items-center' component='div' onClick={goToAsistance} >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' >Planificación académica de la materia </Typography>

                </Container>

                <Typography variant='h2' >
                    Calificaciones
                </Typography>

                <Container className='container bg-danger d-flex align-items-center' component='div' onClick={goToGrades} >
                    <ViewListIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p'  >Calificaciones </Typography>

                </Container>


                <Typography variant='h2' >
                    Nombre del módulo
                </Typography>
                <GridSection sections={sections} />
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
    const { data: sections } = await enagApi.get<SectionModel[]>(`/sections/module_id=${module}`)
    const {data:md}= await enagApi.get<ModuleModel>(`/modules/module_id=${module}`)
    const {data:resources}= await enagApi.get(`/modules/resources/module_id=${module}`)
    const {data:teacher} = await enagApi.get<TeacherModel>(`/teachers/teacher_id=${md.teacher_id}`)

    return {
        props: {
            module,
            sections,
            teacher,
            resources
        }
    }

}

export default MyModuleByName;