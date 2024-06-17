import { Layout } from '@/components/layouts';
import React, { useEffect, useState } from 'react'
import { Container, Button } from '@mui/material';
import { NextPage } from 'next';
import { Dropzone } from '../../../../../../components/my/Dropzone';
import { ActivityModel, SubmissionModel, SubmissionResourceModel } from '@/models';
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
    const [activity, setActivity] = useState<ActivityModel>()
    const getData=async()=>{
        const { submissionId } = router.query
        const {data:sbm} = await enagApi.get<SubmissionModel>(`/submissions/submission_id=${submissionId}`);
        const {data:rsc} = await enagApi.get<SubmissionResourceModel[]>(`/submissions/resources/submission_id=${submissionId}`)
        const {data:act}=await enagApi.get<ActivityModel>(`/activities/activity_id=${sbm.activity_id}`)
        console.log(act);
        setSubmission(sbm)
        setResources(rsc)
        setActivity(act)
    }

    return (
        <Layout title='My submision' >
            <Container className='container' >
                <Container className='container'>
                    <Dropzone submission={submission!} resources={resources} activity={activity!} />
                </Container>
            </Container>
        </Layout>
    )
}

export default MySubmissionById;