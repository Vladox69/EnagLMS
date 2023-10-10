import React from 'react'
import { Navbar } from '@/components/ui';
import { Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function  Autenticacion()  {

  const router= useRouter();

  const login=()=>{
    router.push(`/my`);
  }

  return (
    <>
        <Navbar />
        <Typography variant='h1' fontSize={25}> Inicio de sesión </Typography>
        <Button variant='contained' onClick={login} > Ingresar </Button>
    </>
  )
}
