import { InternCourseModel } from '@/models'
import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { ItemInternCourse } from './ItemInternCourse'

interface Props{
    courses:InternCourseModel[]
}

export const GridInternCourse:FC<Props> = ({courses}) => {
    
  return (
    <Grid container spacing={2} className='gap-2'>
        {courses.map((course)=>(
            <ItemInternCourse key={course.id} course={course} />
        ))}
    </Grid>
  )
}
