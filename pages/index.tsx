import Head from 'next/head'
import { Navbar,Footer } from '../components/ui/';
import { Box, Typography, Button } from '@mui/material';
import { Container } from 'react-bootstrap'

// Iconos
import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';

//
import Image from 'next/image';
import bgImage from '@/assets/fondo.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>ENAG</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/** Nav Bar */}
      <Box>
        <Navbar />
      </Box>
      {/** Primer sección */}
      <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center ' style={{
        // backgroundImage:`url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
      }}>
        <Typography variant='h2' >
          ENAG TU MEJOR OPCIÓN
        </Typography>
        <Container className='d-flex justify-content-center'>
          <Typography variant='h6' width={500} >
            Se parte de nuestros cursos en diferentes partes del Ecuador, en ENAG te convertiremos en un profesional en la gastronomía
          </Typography>
        </Container>
        <Button variant='contained'> Mas Información </Button>
      </Container>

      {/** Segunda sección */}
      <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center '>
        <Typography variant='h6' >BENEFICIOS ACADÉMICOS</Typography>
        <Typography component='p' >
          Nos dedicamos a brindar formación profesional en el campo culinario,
          enfocándonos en capacitar a la comunidad de la Zona Centro del Ecuador para
          que puedan emprender su propio negocio gastronómico con éxito, adquiriendo las habilidades necesarias en el arte culinario.
        </Typography>
        {
          //TODO: Crear 3 y también crear el jsx para el servicio
        }
        <Container className='d-flex flex-column flex-sm-row'>
          <Container>
            <Typography>
              Título del servicio
            </Typography>
            <RoomServiceOutlinedIcon sx={{
              width: 200,
              height: 200
            }} />
            <Typography component='p'>
              Descripción del servicio
            </Typography>
          </Container>
          <Container>
            <Typography>
              Título del servicio
            </Typography>
            <RoomServiceOutlinedIcon sx={{
              width: 200,
              height: 200
            }} />
            <Typography component='p'>
              Descripción del servicio
            </Typography>
          </Container>
          <Container>
            <Typography>
              Título del servicio
            </Typography>
            <RoomServiceOutlinedIcon sx={{
              width: 200,
              height: 200
            }} />
            <Typography component='p'>
              Descripción del servicio
            </Typography>
          </Container>
        </Container>

        <Button variant='contained' >Mas información</Button>
      </Container>

      {/**Tercer sección */}
      <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center ' style={{
        // backgroundImage:`url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
      }}>
        <Typography variant='h4' > PROGRAMA DE PASANTÍAS</Typography>
        <Typography component='p' width={700} > ¡Descubre tu pasión culinaria y adquiere experiencia práctica en nuestra escuela de gastronomía! Únete a nuestro emocionante programa de pasantías,
          donde trabajarás junto a talentosos chefs en un entorno real de cocina. Prepárate para una exitosa carrera culinaria. </Typography>
        <Button variant='contained' >Mas información</Button>
      </Container>

      {/** Cuarta sección */}
      <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center ' style={{
        // backgroundImage:`url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
      }}>
        <Typography variant='h4' >NUESTROS SERVICIOS</Typography>
        <Typography component='p' width={800} >
          Nos dedicamos a brindar formación profesional en el campo culinario,
          enfocándonos en capacitar a la comunidad de la Zona Centro del Ecuador para
          que puedan emprender su propio negocio gastronómico con éxito, adquiriendo las habilidades necesarias en el arte culinario.
        </Typography>
        {
          //TODO: Crear 3 y también crear el jsx para el servicio
        }
        <Container className='d-flex flex-column flex-sm-row'>
          <Container>
            <Typography>
              Título del servicio
            </Typography>
            <RoomServiceOutlinedIcon sx={{
              width: 200,
              height: 200
            }} />
            <Typography component='p'>
              Descripción del servicio
            </Typography>
          </Container>
          <Container>
            <Typography>
              Título del servicio
            </Typography>
            <RoomServiceOutlinedIcon sx={{
              width: 200,
              height: 200
            }} />
            <Typography component='p'>
              Descripción del servicio
            </Typography>
          </Container>
          <Container>
            <Typography>
              Título del servicio
            </Typography>
            <RoomServiceOutlinedIcon sx={{
              width: 200,
              height: 200
            }} />
            <Typography component='p'>
              Descripción del servicio
            </Typography>
          </Container>
        </Container>
        <Button variant='contained' >Mas información</Button>
      </Container>
      {/** Quinta sección */}

      <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center ' style={{
        // backgroundImage:`url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
      }}>
        <Container className='d-flex flex-column flex-sm-row' >
          <Image alt='xx' src={bgImage} width={200} height={200} />
          <Typography component='p' >
            "Mi experiencia en la escuela de gastronomía ha sido increíblemente enriquecedora.
            Desde el primer día, me sentí inspirado y motivado por los talentosos chefs y la pasión que transmiten.
            He aprendido técnicas culinarias innovadoras y descubierto ingredientes sorprendentes.
            La combinación de teoría y práctica me ha dado una base sólida para seguir mi carrera en la gastronomía.
            Estoy agradecido por esta oportunidad única y emocionado por lo que el futuro me depara como chef profesional."
          </Typography>
          <Typography component='blockquote' >
            Harry
          </Typography>
        </Container>
      </Container>

      {/**Sexta sección */}
      <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center ' style={{
        // backgroundImage:`url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
      }}>
        <Typography variant='h4'> OFERTA ACADÉMICA </Typography>
        {
          //TODO:Crear tres tarjetas
        }
        <Container className='d-flex flex-column flex-sm-row'>
          <Container>
            <Typography variant='h5' >
              Cursos Cortos
            </Typography>
            <Typography variant='h6' >
              3 meses
            </Typography>
            <Typography variant='h6' >
              3 meses
            </Typography>
          </Container>
          <Container>
            <Typography variant='h5' >
              Cursos Cortos
            </Typography>
            <Typography variant='h6' >
              3 meses
            </Typography>
            <Typography variant='h6' >
              3 meses
            </Typography>
          </Container>
          <Container>
            <Typography variant='h5' >
              Cursos Cortos
            </Typography>
            <Typography variant='h6' >
              3 meses
            </Typography>
            <Typography variant='h6' >
              3 meses
            </Typography>
          </Container>

        </Container>
        <Button variant='contained' >Mas información</Button>
      </Container>

        <Footer />

    </>
  )
}
