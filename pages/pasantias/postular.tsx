import React from 'react'
import { Navbar, Footer } from '@/components/ui';
import { Container, Typography } from '@mui/material';
import { FormAIntern } from '@/components/admin/intern/FormAIntern';

 const Postular = () => {

  return (
    <>
        <Navbar />
        <Container  className='d-flex flex-column justify-content-center align-items-center text-center ' >
        <Typography variant='h1' fontSize={30} className='mt-4 mb-2' >
          Postula a nuestras pasantías
        </Typography>
        <p style={{textAlign:'justify'}} >
        ¡Da el primer paso hacia una experiencia profesional inolvidable! En ENAG, nuestras pasantías están diseñadas para ofrecerte una inmersión real en el mundo culinario, donde podrás aplicar y perfeccionar tus habilidades junto a profesionales destacados del sector.
         Si estás listo para desafiar tus límites, aprender de los mejores y abrir tu paladar a nuevas posibilidades, no lo pienses más. 
        ¡Postula ahora y transforma tu pasión por la gastronomía en un viaje de descubrimiento y éxito!
        </p>

   
      </Container>
        <Footer />
    </>
  )
}

export default Postular;