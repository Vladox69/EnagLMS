import React from 'react';
import Image from 'next/image';
import { Typography, Box, Grid, Container } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: 'black',
                padding: '20px 0',
            }}
            className='mt-auto'
        >
            <Container>
                <Grid container spacing={4} justifyContent="space-between" alignItems="center">
                    {/* ENAG title */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h4' className='text-light'>
                            ENAG
                        </Typography>
                    </Grid>
                    
                    {/* Contact information */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h6' className='text-light'>
                            Contacto
                        </Typography>
                        <Typography className='text-light' component='p'>
                            0987654321
                        </Typography>
                        <Typography className='text-light' component='p'>
                            infoenag@gmail.com
                        </Typography>
                    </Grid>

                    {/* Social icons */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h6' className='text-light'>
                            SOCIAL
                        </Typography>
                        <Box display="flex" gap={2}>
                            <InstagramIcon className='text-light' />
                            <WhatsAppIcon className='text-light' />
                            <FacebookIcon className='text-light' />
                        </Box>
                    </Grid>
                    
                    {/* Logo */}
                    <Grid item xs={12} sm={4}>
                        <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-end' }}>
                            <Image src='/assets/logosf.png' alt='enag-logo.png' width={100} height={100} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}
