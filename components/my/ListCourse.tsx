import { MyContext, MyState } from '@/context/my'
import { Container } from '@mui/material';
import React, {  FC, useEffect, useState } from 'react'
import { ItemLineCourse } from './ItemLineCourse';
import { enagApi } from '@/apis';
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
