import { Layout } from '@/components/layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'
import { Activity } from '../../../../components/my/activity';

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
    activity: string;
}


export const MyActivityById: NextPage<Props> = ({ activity }) => {
    return (
        <Layout title='Activity' >
            <Activity submission={activity} />
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const data: any[] = [
        { activity: 'sss' },
        { activity: 'sss2' },
        { activity: 'sss3' },
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
    const { activity } = params as { activity: string };

    return {
        props: {
            activity
        }
    }

}

export default MyActivityById;
