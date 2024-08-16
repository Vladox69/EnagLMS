import { InternCourseModel } from '@/models'
import { Container } from '@mui/material'
import React, { FC } from 'react'
import { ItemCourseIntern } from './ItemCourseIntern'

interface Props{
    courses:InternCourseModel[]
}

export const ListCourseIntern:FC<Props> = ({courses}) => {
  return (
    <Container className='container'>
        {courses.map((course)=>(
            <li key={course.id}>

            </li>
        ))

        }
    </Container>
  )
}
