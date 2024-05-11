import { Container } from '@mui/material';
import React, {  FC, } from 'react'
import { ItemLineCourse } from './ItemLineCourse';
import { CourseModel, StudentModel } from '@/models';

interface Props{
    courses:CourseModel[];
}


export const ListCourse:FC<Props> = ({courses}) => {
  
    return (
    <Container className='container'>
        {courses.map((course)=>(
          <ItemLineCourse course={course} key={course.id} />
        ))}
    </Container>
  )
}
