
import {  Nav } from 'react-bootstrap'
import NavbarReact from 'react-bootstrap/Navbar'

import NextLink from 'next/link';
import Image from 'next/image';
import { Container } from '@mui/material';
import { useRouter } from 'next/router';

interface MenuItem {
  key: string;
  href: string;
  text: string;
  icon?: string;
}

const listaMenuItems: MenuItem[] = [
  { key: 'cur', href: '/cursos', text: 'Cursos' },
  { key: 'pas', href: '/pasantias', text: 'Pasantías' },
  { key: 'sbn', href: '/nosotros', text: 'Sobre Nosotros' },
  { key: 'con', href: '/contactanos', text: 'Contáctanos' }
]


export const Navbar = () => {

  const router=useRouter()

  const goToHome=()=>{
    router.push('/')
  }

  return (
    < >
      <NavbarReact  style={{
        backgroundColor:'black'
      }} >
        <Container className='d-flex justify-content-between align-items-center' >
          <Image src='/assets/logosf.png' alt='enag-logo.png' width={100} height={100}  onClick={goToHome} />
          <Nav  >
            {
              listaMenuItems.map(menuItem => (
                <Nav.Link className='text-light' key={menuItem.key} href={menuItem.href}> {menuItem.text} </Nav.Link>
              ))
            }
          </Nav>
        </Container>
      </NavbarReact>
    </>
  )
}
