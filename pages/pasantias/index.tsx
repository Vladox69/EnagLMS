import React from 'react'
import { Footer, Navbar } from '@/components/ui';
import { Typography,Button } from '@mui/material';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function Pasantias() {

    const router= useRouter()
    
    const goToPostular=()=>{
        router.push(`/pasantias/postular`)
    }

    return (
        <>
            <Navbar />

            <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center ' >
                <Typography variant='h1' fontSize={25} className='text-uppercase' >
                    programa de pasantías
                </Typography>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Labore deleniti maiores soluta consequuntur doloremque saepe ea reprehenderit ratione praesentium
                    nesciunt accusamus dolorum sit aspernatur deserunt facere possimus, tenetur iure? Enim!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ipsum quos atque qui neque,
                     voluptatibus dolores dicta voluptates magnam pariatur, fugiat reprehenderit! 
                    Ipsum at eligendi commodi minus saepe nostrum culpa?
                </p>
                <Button variant='contained' className='text-uppercase' onClick={goToPostular} >
                    postular
                </Button>
            </Container>
            <Footer />
        </>
    )
}
