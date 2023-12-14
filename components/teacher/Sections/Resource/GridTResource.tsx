import { SectionResourceModel } from '@/models'
import React, { FC, useState } from 'react'
import { Grid } from '@mui/material';
import { ItemTResource } from './ItemTResource';

interface Props {
    section_resources: SectionResourceModel[]
}

export const GridTResource: FC<Props> = ({ section_resources }) => {

    const [resources, setResources] = useState(section_resources)

    const onDeleteResource = (section_resource: SectionResourceModel) => {
        setResources(resources => resources.filter(res => res.id !== section_resource.id))
    }

    return (
        <Grid container className='gap-2'>
            {
                resources.map((section_resource) => (
                    <ItemTResource
                        key={section_resource.id}
                        section_resource={section_resource}
                        onDeleteResource={() => onDeleteResource(section_resource)}
                    />
                ))
            }
        </Grid>
    )
}
