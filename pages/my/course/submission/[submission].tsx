import { Layout } from '@/components/layouts';
import React from 'react'
import { Container, Button } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface Props {
    submission: string;
}

export const MySubmissionById:NextPage<Props> = () => {
  return (
    <Layout title='My submision' >
        <Container className='container bg-primary' >
            <Container className='container bg-danger'>
                ss
            </Container>
            
            <Button variant='contained' >
                Guardar Cambios
            </Button>
            <Button variant='contained' color='error'>
                Cancelar
            </Button>
        </Container>

    </Layout>
  )
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const data: any[] = [
        { submission: 'sss' },
        { submission: 'sss2' },
        { submission: 'sss3' },
    ]

    return {
        paths: data.map(m => ({
            params: {
                submission: m.submission
            }
        })),
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { submission } = params as { submission: string };

    return {
        props: {
            submission
        }
    }

}

export default MySubmissionById;