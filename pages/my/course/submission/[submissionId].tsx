import { Layout } from '@/components/layouts';
import React from 'react'
import { Container, Button } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Dropzone } from '../../../../components/my/Dropzone';
import { SubmissionModel, SubmissionResourceModel } from '@/models';
import { enagApi } from '@/apis';

interface Props {
    submission: SubmissionModel;
    resources:SubmissionResourceModel[]
}

export const MySubmissionById: NextPage<Props> = ({ submission,resources }) => {

    return (
        <Layout title='My submision' >
            <Container className='container bg-primary' >
                <Container className='container bg-danger'>
                    <Dropzone submission={submission} resources={resources} />
                </Container>
            </Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const data: any[] = []

    return {
        paths: data.map(s => ({
            params: {
                submissionId: s.submissionId
            }
        })),
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { submissionId } = params as { submissionId: string };
    
    const {data:submission} = await enagApi.get<SubmissionModel>(`/submissions/${submissionId}`);
    const {data:resources} = await enagApi.get<SubmissionModel>(`/submissions/resources/${submissionId}`)

    return {
        props: {
            submission,
            resources
        }
    }

}

export default MySubmissionById;