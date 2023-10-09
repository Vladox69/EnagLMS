import React from 'react'
import { Navbar, Footer } from '@/components/ui';
import { Carousel, Container } from 'react-bootstrap';
import { Typography } from '@mui/material';
import Image from 'next/image';

import bgImage from '@/assets/fondo.jpg';

export default function SobreNosotros() {
    return (
        <>
            <Navbar />
            <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center '>
                <Typography variant='h1' fontSize={25} > ENAG </Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus libero iure, odit dolore mollitia illo amet dolorem officiis accusamus iusto vero nihil dignissimos
                    harum ex architecto quibusdam saepe itaque minus.
                </p>

                <Carousel>
                    <Carousel.Item>
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
                <Container fluid className='d-flex justify-content-around'>
                    <Container>
                        <Image src={bgImage} alt='ss' width={200} height={200} />
                        <Typography variant='h4' fontSize={10} className='text-muted' >MATRIZ</Typography>
                        <Typography variant='h4' fontSize={10} >AMBATO</Typography>
                    </Container>
                    <Container>
                        <Image src={bgImage} alt='ss' width={200} height={200} />
                        <Typography variant='h4' fontSize={10} className='text-muted' >MATRIZ</Typography>
                        <Typography variant='h4' fontSize={10} >AMBATO</Typography>
                    </Container>
                </Container>
            </Container>
            <Footer />
        </>
    )
}
