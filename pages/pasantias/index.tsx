import React from 'react'
import { Footer, Navbar } from '@/components/ui';
import { Typography,Button, Container } from '@mui/material';
import { useRouter } from 'next/router';
import { FormAIntern } from '@/components/admin/intern/FormAIntern';

export default function Pasantias() {

    const router= useRouter()
    
    const goToPostular=()=>{
        router.push(`/pasantias/postular`)
    }

    return (
        <>
            <Navbar />

            <Container  className='d-flex flex-column justify-content-center align-items-center text-center ' >
                <Typography variant='h1' fontSize={25} className='text-uppercase my-4' >
                    programa de pasantías
                </Typography>

                <p style={{
                    textAlign:'justify'
                }}>
                El "Programa de Pasantías" de ENAG ofrece una oportunidad única para estudiantes y recién graduados de sumergirse en el mundo real de la gastronomía. 
                Con un enfoque práctico, este programa permite aplicar conocimientos teóricos en entornos de trabajo dinámicos y desafiantes, fomentando el desarrollo de habilidades culinarias avanzadas y proporcionando una experiencia invaluable. 
                Al participar, los pasantes se exponen a técnicas innovadoras y a la tutela de chefs experimentados, lo que abre puertas para futuras oportunidades profesionales en el ámbito culinario. 
                Únete a nosotros y da el primer paso para transformar tu pasión por la cocina en tu carrera profesional.
                </p>
                <FormAIntern />
            </Container>
            <Footer />
        </>
    )
}
