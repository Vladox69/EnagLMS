
import { Container, Nav } from 'react-bootstrap'
import NavbarReact from 'react-bootstrap/Navbar'

import NextLink from 'next/link';

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

  return (
    < >
      <NavbarReact  style={{
        backgroundColor:'black'
      }} >
        <Container >
          <NavbarReact.Brand href="#home" className='text-light' >ENAG</NavbarReact.Brand>
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
