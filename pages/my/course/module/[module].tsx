import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { Container, Typography } from '@mui/material';
import { GridSection } from '../../../../components/my/section/';

interface Props {
    module: string;
}

export const MyModuleByName: NextPage<Props> = ({ module }) => {
    return (
        <Layout title='My Module'>
            <Container className='container bg-primary'  >
                <Typography variant='h2' >
                    Nombre del módulo
                </Typography>
                <GridSection />
            </Container>
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const data: any[] = [
        { module: 'sss' },
        { module: 'sss2' },
        { module: 'sss3' },
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

    return {
        props: {
            module
        }
    }

}

export default MyModuleByName;