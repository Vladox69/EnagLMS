import { SectionResourceModel } from '@/models'
import React, { FC } from 'react'
import { Grid } from '@mui/material';
import { ItemTResource } from './ItemTResource';

interface Props {
    section_resources: SectionResourceModel[]
}

export const GridTResource: FC<Props> = ({ section_resources }) => {
    return (
        <Grid container>
            {
                section_resources.map((section_resource) => (
                    <ItemTResource key={section_resource.id} section_resource={section_resource} />
                ))
            }
        </Grid>
    )
}
