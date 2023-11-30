import React from 'react'
import { Navbar, Footer } from '@/components/ui';
import { Container } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { FormAIntern } from '@/components/admin/intern/FormAIntern';

 const Postular = () => {

  return (
    <>
        <Navbar />
        <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center ' >
        <Typography variant='h1' fontSize={30} >
          Postula a nuestras pasantías
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Esse nobis enim soluta dolores cupiditate illo, quis nostrum delectus necessitatibus, aut ducimus voluptatem ratione!
          A enim quae quod, qui delectus illum?
        </p>

        <FormAIntern />
      </Container>
        <Footer />
    </>
  )
}

export default Postular;