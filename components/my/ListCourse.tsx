import { MyContext, MyState } from '@/context/my'
import { Container } from '@mui/material';
import React, { useContext, useMemo } from 'react'
import { ItemLineCourse } from './ItemLineCourse';

interface Props{
    status:MyState;
}


export const ListCourse = () => {
  
  const {courses} = useContext(MyContext);

    return (
    <Container className='container bg-primary' >
        {courses.map((course)=>(
          <ItemLineCourse course={course} key={course._id} />
        ))}
    </Container>
  )
}
