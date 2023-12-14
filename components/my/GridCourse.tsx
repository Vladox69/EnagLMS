import React, { FC } from 'react'
import { Grid } from '@mui/material';
import { ItemCourse } from './ItemCourse';
import { ModuleModel } from '@/models';

interface Props{
  modules:ModuleModel[]
}

export const GridCourse:FC<Props> = ({modules}) => {

  return (
    <Grid container spacing={2}  >
        {modules.map((module)=> (
            <ItemCourse  module={module} key={module.id} />
        ) )}
    </Grid>
  )
}
