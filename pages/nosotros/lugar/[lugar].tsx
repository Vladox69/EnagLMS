import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { Navbar, Footer } from '@/components/ui';
import { Lugar } from '@/interface';
import { Container } from 'react-bootstrap';
import { Typography } from '@mui/material';

import bgImage from '@/assets/fondo.jpg';
import Image from 'next/image';

interface Props{
    lugar:string;
}

 const LugarByName:NextPage<Props> = ({lugar}) => {
  return (
    <>
    <Navbar />
    <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center '>
        <Typography variant='h1' fontSize={25} className='text-uppercase' > {lugar} </Typography>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, recusandae a. 
            Tempora dolor neque blanditiis molestiae sed similique deleniti, hic officia! 
            Nulla recusandae exercitationem esse labore, voluptas aliquid ipsa inventore.
        </p>

        <Image  src={bgImage} alt='ss' width={200} height={200} />

        <Typography variant='h2' fontSize={20} className='text-uppercase' > donde nos encontramos </Typography>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, recusandae a. 
            Tempora dolor neque blanditiis molestiae sed similique deleniti, hic officia! 
            Nulla recusandae exercitationem esse labore, voluptas aliquid ipsa inventore.
        </p>

        <Image  src={bgImage} alt='ss' width={200} height={200} />

    </Container>
    <Footer />
    </>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const data: Lugar[] = [
        { nombre: 'lugar1' },
        { nombre: 'lugar2' },
        { nombre: 'lugar3' }
    ]
  
    return {
      paths: data.map(l => ({
        params: { 
            lugar:l.nombre
         }
      })),
      //fallback: false
      fallback:'blocking'
    }
  }

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {lugar} = params as {lugar:string};

    return {
        props: {
            lugar
        }
    }
}


export default LugarByName;