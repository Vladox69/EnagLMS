import { Navbar, Footer } from '@/components/ui'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Cursos() {
    return (
        <>
            <Box>
                <Navbar />
            </Box>

            <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center ' style={{
                // backgroundImage:`url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '500px',
            }}>
                <Typography variant='h2' >
                    CURSOS
                </Typography>
                <Container className='d-flex justify-content-center'>
                    <Typography variant='h6' width={1500} >
                        Se parte de nuestros cursos en diferentes partes del Ecuador, en ENAG te convertiremos en un profesional en la gastronomía
                    </Typography>
                </Container>

                <Container>
                    <Typography variant='h5' className='text-start' >
                        Cursos cortos
                    </Typography>
                    <Container className='row ' >
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                    </Container>
                </Container>

                <Container>
                    <Typography variant='h5' className='text-start' >
                        Cursos largos
                    </Typography>
                    <Container className='row ' >
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                    </Container>
                </Container>

                <Container>
                    <Typography variant='h5' className='text-start' >
                        Master clases
                    </Typography>
                    <Container className='row ' >
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                        <Typography className='col-12 col-lg-4' component='p'> Panadería </Typography>
                    </Container>
                </Container>

                <Container>
                    <Typography variant='h5' className='text-start' >
                        Master clases
                    </Typography>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Officia quidem fugiat consequatur omnis amet est, voluptates enim non impedit.
                        Explicabo, nam dolore veniam autem eaque nihil at tenetur beatae repellendus.
                    </p>
                    <Button variant='contained'>Mas información</Button>
                </Container>

            </Container>

            <Footer />
        </>
    )
}
