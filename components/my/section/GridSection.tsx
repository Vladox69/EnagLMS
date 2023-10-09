import React from 'react'
import { Container } from '@mui/material';
import {ItemSection} from './'

export const GridSection = () => {

    const sections= ['sss','ddd','aaaa'];

  return (
    <Container className='container bg-danger ' >
        {
            sections.map((s)=>(
                <ItemSection  key={s} section={s} />
            ))
        }
    </Container>
  )
}
