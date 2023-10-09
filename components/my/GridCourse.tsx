import React from 'react'
import { Grid } from '@mui/material';
import { ItemCourse } from './ItemCourse';

export const GridCourse = () => {

    const items:any[]=[{course:'sss'},{course:'ddd'},{course:'aaa'},{course:'bbb'}]

  return (
    <Grid container spacing={2} >
        {items.map((ic,index)=> (
            <ItemCourse course={ic.course} key={index} />
        ) )}
    </Grid>
  )
}
