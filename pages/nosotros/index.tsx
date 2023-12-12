import React from 'react'
import { Navbar, Footer } from '@/components/ui';
import { Carousel } from 'react-bootstrap';
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import Image from 'next/image';

import bgImage from '@/assets/fondo.jpg';

export default function SobreNosotros() {
    return (
        <>
            <Navbar />
            <Container className='d-flex flex-column justify-content-center align-items-center text-center '>
                <Typography variant='h1' fontSize={25} > ENAG </Typography>
                <p className='w-75' style={{
                    textAlign: 'justify'
                }} >
                    ENAG se destaca como una escuela de gastronomía de vanguardia, dedicada a nutrir y perfeccionar el talento culinario de sus estudiantes.
                    Con un enfoque práctico e innovador, nuestra institución ofrece una experiencia educativa completa, combinando técnicas tradicionales con las últimas tendencias en el arte culinario.
                    Cada curso en ENAG está diseñado para sumergir a los estudiantes en el mundo de la gastronomía, garantizando que al graduarse, no solo posean un conocimiento profundo y respeto por la cocina, sino también la confianza y habilidad para innovar y crear.
                    Únete a ENAG y transforma tu pasión por la cocina en una carrera de excelencia.
                </p>

                <Carousel className='w-75 '>
                    <Carousel.Item >
                        <Image src={bgImage} alt='ss' />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={bgImage} alt='ss' />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={bgImage} alt='ss' />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Typography variant='h2' fontSize={25} > DONDE NOS ENCONTRAMOS </Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo soluta ut cupiditate eligendi iusto optio voluptatibus nostrum tempora eius quos officia, totam tempore nesciunt,
                    modi dolore aperiam deserunt quam. Nulla!
                </p>
                <Container className='d-flex justify-content-around mb-5'>
                    <Box
                        sx={{
                            position: 'relative',
                            width: 345,
                            height: 345,
                            borderRadius: '15px',
                            overflow: 'hidden',
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        }}
                    >
                        <img
                            src="/assets/fondo.jpg"
                            alt="Sede Orellana"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(70%)',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                padding: '10px',
                            }}
                        >
                            <Typography variant="h5">
                                Matriz AMBATO
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            position: 'relative',
                            width: 345,
                            height: 345,
                            borderRadius: '15px',
                            overflow: 'hidden',
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        }}
                    >
                        <img
                            src="/assets/fondo.jpg"
                            alt="Sede Orellana"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(70%)',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                padding: '10px',
                            }}
                        >
                            <Typography variant="h5">
                                Sede PUYO
                            </Typography>
                        </Box>
                    </Box>
                    
                </Container>
            </Container>
            <Footer />
        </>
    )
}
