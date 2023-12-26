import React from 'react'
import { Navbar } from '@/components/ui';
import { LoginForm } from '@/components/auth/LoginForm';

export default function  Autenticacion()  {
  return (
    <>
        <Navbar />
        <LoginForm />
    </>
  )
}
