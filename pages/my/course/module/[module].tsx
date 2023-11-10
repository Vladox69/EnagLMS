import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { Container, Typography, Divider, Dialog, DialogTitle, IconButton, DialogContent, DialogActions, Button } from '@mui/material';
import { GridSection } from '../../../../components/my/section/';
import ArticleIcon from '@mui/icons-material/Article';
import { useRouter } from 'next/router';
import { enagApi } from '@/apis';
import { SectionModel } from '@/models';
import { useContext, useState } from 'react';
import { MyContext } from '@/context/my';
import ViewListIcon from '@mui/icons-material/ViewList';
import CloseIcon from '@mui/icons-material/Close';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { CustomDialog } from '../../../../components/my/CustomDialog';

interface Props {
    module: string;
    sections: SectionModel[]
}

export const MyModuleByName: NextPage<Props> = ({ module, sections }) => {
    const router = useRouter();

    const { user } = useContext(MyContext)
    const [open, setOpen] = useState(false)

    const handleOpen=()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false)
    }

    const goToResource = (id: number) => {
        router.push(`/my/course/resource/${id}`);
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
                <Container className='container bg-danger d-flex ' component='div'  onClick={handleOpen} >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' className=''> Hoja de vida del Docente </Typography>
                </Container>
                 <CustomDialog open={open} handleClose={handleClose}  />   
                <Divider />
                <Container className='container bg-danger d-flex align-items-center' component='div' onClick={() => goToResource(2)} >
                    <ArticleIcon sx={{
                        width: 50,
                        height: 50
                    }} />
                    <Typography component='p' >Planificación académica de la materia </Typography>

                </Container>
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
    const { data: sections } = await enagApi.get<SectionModel[]>(`/sections/module_id=${module}`);

    return {
        props: {
            module,
            sections
        }
    }

}

export default MyModuleByName;