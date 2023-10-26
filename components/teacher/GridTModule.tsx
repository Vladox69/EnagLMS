import { TeacherContext } from '@/context/teacher'
import { Grid } from '@mui/material'
import React, { FC, useContext } from 'react'
import { ItemTModule } from './ItemTModule'
import { ModuleModel } from '@/models'

interface Props{
    modules:ModuleModel[]
}

export const GridTModule:FC<Props> = ({modules}) => {
    return (
        <Grid container spacing={2} >
            {modules.map((module)=>(
                <ItemTModule key={module.id} module={module} />
            ))}
        </Grid>
    )
}
