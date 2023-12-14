import React, { FC, useState } from 'react'
import { Grid } from '@mui/material';
import { ActivityResourceModel } from '@/models';
import { ItemTActivityResource } from './ItemTActivityResource';

interface Props {
    resources: ActivityResourceModel[]
}

export const GridTActivityResource: FC<Props> = ({ resources: reso }) => {
    const [resources, setResources] = useState(reso)

    const onDeleteResource = (resource:ActivityResourceModel) => {
        setResources(resources=>resources.filter(res=>res.id!==resource.id))
    }

    return (
        <Grid container className='gap-2'>
            {
                resources.map((resource) => (
                    <ItemTActivityResource
                        key={resource.id}
                        activity_resource={resource}
                        onDeleteResource={() => onDeleteResource(resource)}
                    />
                ))
            }
        </Grid>
    )
}
