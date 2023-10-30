import { SectionModel } from '@/models'
import React, { FC } from 'react'
import {  Grid } from '@mui/material';
import { ItemTSection } from './ItemTSection';

interface Props {
  sections: SectionModel[]
}

export const GridTSection: FC<Props> = ({ sections }) => {
  return (
    <Grid container>
        {
          sections.map((section)=>( 
            <ItemTSection key={section.id} section={section} />
          ))
        }
    </Grid>
  )
}
