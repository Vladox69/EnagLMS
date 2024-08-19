import { Nav, Navbar as NavbarReact, Container, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';
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
  { key: 'con', href: '/contactanos', text: 'Contáctanos' },
];

export const Navbar = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  return (
    <NavbarReact expand="lg" style={{ backgroundColor: 'black' }} variant="dark">
      <Container>
        <NavbarReact.Brand onClick={goToHome} style={{ cursor: 'pointer' }}>
          <Image src="/assets/logosf.png" alt="enag-logo.png" width={100} height={100} />
        </NavbarReact.Brand>
        <NavbarReact.Toggle aria-controls="basic-navbar-nav" />
        <NavbarReact.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {listaMenuItems.map((menuItem) => (
              <Nav.Link className="text-light" key={menuItem.key} href={menuItem.href}>
                {menuItem.text}
              </Nav.Link>
            ))}
          </Nav>
        </NavbarReact.Collapse>
      </Container>
    </NavbarReact>
  );
};
