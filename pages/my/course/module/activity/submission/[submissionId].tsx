import { Layout } from '@/components/layouts';
import React, { useEffect, useState } from 'react'
import { Container, Button } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Dropzone } from '../../../../../../components/my/Dropzone';
import { SubmissionModel, SubmissionResourceModel } from '@/models';
import { enagApi } from '@/apis';
import { useRouter } from 'next/router';

interface Props {
    submission: SubmissionModel;
    resources:SubmissionResourceModel[]
}

export const MySubmissionById: NextPage<Props> = ({  }) => {

    const router= useRouter()
    useEffect(() => {
        if(router.isReady){
            getData()
        }
    }, [router.isReady])

    const [submission, setSubmission] = useState<SubmissionModel>()
    const [resources, setResources] = useState<SubmissionResourceModel[]>([])

    const getData=async()=>{
        const { submissionId } = router.query
        const {data:sbm} = await enagApi.get<SubmissionModel>(`/submissions/submission_id=${submissionId}`);
        const {data:rsc} = await enagApi.get<SubmissionResourceModel[]>(`/submissions/resources/submission_id=${submissionId}`)
        setSubmission(sbm)
        setResources(rsc)
    }

    return (
        <Layout title='My submision' >
            <Container className='container' >
                <Container className='container'>
                    <Dropzone submission={submission!} resources={resources} />
                </Container>
            </Container>
        </Layout>
    )
}

export default MySubmissionById;