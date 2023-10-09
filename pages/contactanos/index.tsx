import React from 'react'
import { Navbar, Footer } from '@/components/ui';
import { Container, Form } from 'react-bootstrap';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

import bgImage from '@/assets/fondo.jpg'

export default function Contactanos() {
    return (
        <>
            <Navbar />
            <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center '>
                <Typography variant='h1' fontSize={25} > Contactanos </Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eligendi?
                    Modi repellat beatae quos temporibus libero corrupti omnis nemo in ullam iusto officiis rerum maiores ratione,
                    corporis magnam esse labore.
                </p>
                <Container className='d-flex justify-content-around' >
                    <Container>
                        <Image src={bgImage} alt='ss' width={200} height={200} />
                        <Typography variant='h4' fontSize={20} >Av. Cevallos y 12 de Noviembre</Typography>
                        <Typography variant='h4' fontSize={20} >Matriz Ambato</Typography>
                    </Container>
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

                        <Button variant="contained" type="submit" className='mb-2'>
                            Enviar
                        </Button>
                    </Form>
                </Container>

            </Container>
            <Footer />
        </>
    )
}
