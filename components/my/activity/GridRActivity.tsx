import { ActivityResourceModel } from '@/models'
import React, { FC } from 'react'
import { ItemRActivity } from './ItemRActivity'

interface Props{
    activities_resources:ActivityResourceModel[]
}

export const GridRActivity:FC<Props> = ({activities_resources}) => {
  return (
    <>
    {
        activities_resources.map((resource)=>(
            <ItemRActivity key={resource.id} resource={resource} />
        ))
    }
    </>
  )
}
