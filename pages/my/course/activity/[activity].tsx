import { Layout } from '@/components/layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'
import { Activity } from '../../../../components/my/activity';
import { enagApi } from '@/apis';
import { ActivityModel } from '@/models';

function createData(
    name: string,
    calories: number,
) {
    return { name, calories };
}

const rows = [
    createData('Frozen yoghurt', 159),
    createData('Ice cream sandwich', 237),
    createData('Eclair', 262),
];

interface Props {
    activity: ActivityModel;
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
