import React from 'react'
import Image from 'next/image';
import { Typography, Box, Container } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'black'
        }}  className='mt-auto' >
            <div className='d-flex ms-3 ps-3' >
                <h2 className='text-light' >ENAG</h2>
            </div>
            <div className='d-flex justify-content-between align-items-center p-3'>
                <div className='d-flex justify-content-evenly'>
                    <Container className='text-light' >
                        <Typography variant='h5' >
                            Contacto
                        </Typography>
                        <Typography component='p' >
                            0987654321
                        </Typography>
                        <Typography component='p' >
                            infoenag@gmail.com
                        </Typography>
                    </Container>
                    <Container className='text-light'>
                        <Typography variant='h5' >
                            SOCIAL
                        </Typography>
                        <Box className='d-flex gap-2'>
                            <InstagramIcon />
                            <WhatsAppIcon />
                            <FacebookIcon />
                        </Box>
                    </Container>
                </div>
                <Image src='/assets/logosf.png' alt='enag-logo.png' width={100} height={100} />
            </div>
        </footer>
    )
}
