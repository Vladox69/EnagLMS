import React, { FC, useEffect, useState } from 'react'
import { Container } from '@mui/material';
import { ItemActivity } from '.';
import { ActivityModel } from '@/models';
import { enagApi } from '@/apis';

interface Props{
    section:number
}

export const GridActivity:FC<Props> = ({section}) => {
    
    const [activities, setActivities] = useState<ActivityModel[]>([])
    

    useEffect(() => {
        getData();
    }, [])
    

    const getData=async()=>{
        const {data}=await enagApi.get(`/activities/${section}`)
        setActivities(data)
    }

    return (
        <>
            <Container>
                {activities.map((activity,index) => (
                    <ItemActivity key={index} activity={activity} />
                ))}
            </Container>
        </>
    )
}
