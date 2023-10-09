import React from 'react'
import { Typography } from '@mui/material';
import { Navbar, Footer } from '@/components/ui';
import { Button, Container, Form } from 'react-bootstrap';

const Personalizado = () => {
  return (
    <>
      <Navbar />
      <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center ' >
        <Typography variant='h1' fontSize={30} >
          CURSOS PERSONALIZADOS
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Esse nobis enim soluta dolores cupiditate illo, quis nostrum delectus necessitatibus, aut ducimus voluptatem ratione!
          A enim quae quod, qui delectus illum?
        </p>

        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" placeholder="Nombre completo" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label >Celular</Form.Label>
            <Form.Control type="phone" placeholder="Celular" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Tema de interés</Form.Label>
            <Form.Control type="text" placeholder="Tema de interés" />
          </Form.Group>

          <Button variant="primary" type="submit" className='mb-2'>
            Enviar
          </Button>
        </Form>
      </Container>

      <Footer />
    </>
  )
}

export default Personalizado;

