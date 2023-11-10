import { Layout } from '@/components/layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'
import { Activity } from '../../../../../components/my/activity';
import { enagApi } from '@/apis';
import { ActivityModel } from '@/models';
import { SubmissionStudentI } from '@/interface/submission_student';

interface Props {
    activity: ActivityModel;
    submission:SubmissionStudentI
}


export const MyActivityById: NextPage<Props> = ({ activity }) => {
    return (
        <Layout title='Activity' >
            <Activity activity={activity} />
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const data: any[] = [
    ]

    return {
        paths: data.map(m => ({
            params: {
                activity: m.activity
            }
        })),
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { activity:id } = params as { activity: string };
    const {data:activity}= await enagApi.get<ActivityModel>(`/activities/activity_id=${id}`)
    
    return {
        props: {
            activity
        }
    }

}

export default MyActivityById;
