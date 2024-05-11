import { ActivityInternModel } from '@/models'
import React, { FC } from 'react'
import { ItemInternActivity } from './ItemInternActivity'

interface Props{
    activities:ActivityInternModel[]
}

export const GridIternActivity:FC<Props> = ({activities}) => {
  return (
    <>
    {
        activities.map((activity)=>(
            <ItemInternActivity activity={activity} key={activity.id} />
        ))
    }
    </>
  )
}
