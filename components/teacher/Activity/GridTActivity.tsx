import { ActivityModel } from '@/models'
import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { ItemTActivity } from './ItemTActivity'

interface Props{
    activities:ActivityModel[]
}

export const GridTActivity:FC<Props> = ({activities}) => {
  return (
    <Grid container>
        {
            activities.map((activity)=>(
                <ItemTActivity key={activity.id} activity={activity} />
            ))
        }
    </Grid>
  )
}
