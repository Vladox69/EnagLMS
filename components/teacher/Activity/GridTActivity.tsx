import { ActivityModel } from '@/models'
import { Grid } from '@mui/material'
import React, { FC, useState } from 'react'
import { ItemTActivity } from './ItemTActivity'

interface Props{
    activities:ActivityModel[]
}

export const GridTActivity:FC<Props> = ({activities:acts}) => {

  const [activities, setActivities] = useState(acts)

  const onDeleteActivity=(activity:ActivityModel)=>{
    setActivities(activities=>activities.filter(act=>act.id!==activity.id))
  }

  return (
    <Grid container className='gap-2'>
        {
            activities.map((activity)=>(
                <ItemTActivity 
                key={activity.id} 
                activity={activity} 
                onDeleteActivity={()=>onDeleteActivity(activity)} />
            ))
        }
    </Grid>
  )
}
