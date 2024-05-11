import { enagApi } from '@/apis'
import { Layout } from '@/components/layouts'
import { ActivityIntern } from '@/components/my/intern/ActivityIntern'
import { ActivityInternModel } from '@/models'
import { Box, CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export const  MyInternActivityById= () => {
    const router=useRouter()
    const [activity, setActivity] = useState<ActivityInternModel>()
    useEffect(() => {
        if(router.isReady){
            getData()
        }
    }, [router.isReady])
    
    const getData=async()=>{
        const {activity:id}=router.query
        const {data}=await enagApi.get<ActivityInternModel>(`/intern_activity/activity_id=${id}`)
        setActivity(data)
    }   

  return (
    <Layout>
        {
            (activity==undefined)?
            (                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="80vh" // Ajusta esta altura según tus necesidades
            >
                <CircularProgress size={100} color='error' />
            </Box>):
            (
                <ActivityIntern  activity={activity} />
            )
        }
    </Layout>
  )
}


export default MyInternActivityById