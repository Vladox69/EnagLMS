import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import NavbarReact from 'react-bootstrap/Navbar'
import Image from 'next/image';
import bgImage from '@/assets/fondo.jpg';
import { Typography } from '@mui/material';


export const Footer = () => {
    return (
        <footer style={{
            backgroundColor:'black'
        }} >
            <Container className='d-flex'>
                <h2 className='text-light' >ENAG</h2>
            </Container>
            <Container  className='d-flex justify-content-between'>
                <Container className='d-flex '>
                    <Container className='text-light' >
                        <Typography variant='h6' >
                            ENAG TU MEJOR OPCIÓN
                        </Typography>
                        <Typography component='p' >
                            ENAG TU MEJOR OPCIÓN
                        </Typography>
                        <Typography component='p' >
                            ENAG TU MEJOR OPCIÓN
                        </Typography>
                    </Container>
                    <Container className='text-light'>
                        <Typography variant='h6' >
                            ENAG TU MEJOR OPCIÓN
                        </Typography>
                        <Typography component='p' >
                            ENAG TU MEJOR OPCIÓN
                        </Typography>
                        <Typography component='p' >
                            ENAG TU MEJOR OPCIÓN
                        </Typography>
                    </Container>
                </Container>
                <Image src={bgImage} alt='no-image' width={100} height={100} />
            </Container>
        </footer>
    )
}
