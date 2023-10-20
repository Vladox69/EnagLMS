import React, { FC } from 'react'
import { Container } from '@mui/material';
import {ItemSection} from './'
import { SectionModel } from '@/models';

interface Props{
  sections:SectionModel[]
}

export const GridSection:FC<Props> = ({sections}) => {


  return (
    <Container className='container bg-danger ' >
        {
            sections.map((section)=>(
                <ItemSection  key={section.id} section={section} />
            ))
        }
    </Container>
  )
}
