import { Layout } from '@/components/layouts';
import {  NextPage } from 'next';
import React, { useEffect, useState } from 'react'
import { Activity } from '../../../../../components/my/activity';
import { enagApi } from '@/apis';
import { ActivityModel } from '@/models';
import { useRouter } from 'next/router';
import { Box, CircularProgress } from '@mui/material';

interface Props {

}

export const MyActivityById: NextPage<Props> = ({  }) => {

    const [activity, setActivity] = useState<ActivityModel>();
    const router=useRouter();

    useEffect(() => {
        if(router.isReady){
            getData();
        }
    }, [router.isReady])
    

    const getData=async()=>{
        const {activity:activity_id}=router.query
        const {data:act}= await enagApi.get<ActivityModel>(`/activities/activity_id=${activity_id}`)
        setActivity(act);
    }

    return (
        <Layout title='Activity' >
            {
                (activity==undefined)?
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="80vh"
                >
                    <CircularProgress size={100} color='error' />
                </Box>
                :
                <Activity activity={activity!} />
            }
            
        </Layout>
    )
}



export default MyActivityById;
