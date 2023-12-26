import Head from 'next/head'
import { Navbar, Footer } from '../components/ui/';
import { Box, Typography, Button, Container, Grid } from '@mui/material';

// Iconos
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SchoolIcon from '@mui/icons-material/School';
//
import Image from 'next/image';
import bgImage from '@/assets/fondo.jpg';
import { useEffect, useState } from 'react';
import { CourseModel } from '@/models';
import { enagApi } from '@/apis';
import { useRouter } from 'next/router';


export default function Home() {
  const [cortos, setCortos] = useState<CourseModel[]>([])
  const [largos, setLargos] = useState<CourseModel[]>([])
  const [master, setMaster] = useState<CourseModel[]>([])

  useEffect(() => {
    getCourses()
  }, [])


  const getCourses = async () => {
    const { data } = await enagApi.get<CourseModel[]>(`/courses`)
    setCortos(data.filter(c => c.type == 'Cortos'))
    setLargos(data.filter(c => c.type == 'Largos'))
    setMaster(data.filter(c => c.type == 'Master'))
  }

  const router = useRouter()

  const goToCourses=()=>{
    router.push(`/cursos`)
  }

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
      <div className='d-flex flex-column justify-content-center align-items-center text-center p-0'
        style={{
          backgroundImage: "url('/assets/fondo.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '500px',
        }}>
        <Typography variant='h2' color='white' >
          ENAG TU MEJOR OPCIÓN
        </Typography>
        <Container className='d-flex justify-content-center'>
          <Typography variant='h6' width={500} color='white' fontWeight='bold' sx={{}} >
            Se parte de nuestros cursos en diferentes partes del Ecuador, en ENAG te convertiremos en un profesional en la gastronomía
          </Typography>
        </Container>
        {/* <Button variant='contained' color='error'  > Mas Información </Button> */}
      </div>

      {/** Segunda sección */}
      <Container className='d-flex flex-column justify-content-center align-items-center text-center my-3'>
        <Typography variant='h4' >BENEFICIOS ACADÉMICOS</Typography>
        <Typography component='p' >
          Nos dedicamos a brindar formación profesional en el campo culinario,
          enfocándonos en capacitar a la comunidad de la Zona Centro del Ecuador para
          que puedan emprender su propio negocio gastronómico con éxito, adquiriendo las habilidades necesarias en el arte culinario.
        </Typography>
        <Grid container className='d-flex justify-content-evenly py-3'>
          <Grid item xs={12} md={4}>
            <Typography variant='h5' className='fw-bold'  >
              Desarrollo de habilidades técnicas
            </Typography>
            <RestaurantMenuIcon sx={{
              width: 150,
              height: 150
            }} />
            <Typography component='p'  >
              Preparación y manejo de alimentos hasta técnicas de cocción avanzadas y presentación de platos, lo que les permite ejecutar recetas complejas y crear sus propios menús.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h5' className='fw-bold' >
              Experiencia práctica e innovación
            </Typography>
            <OutdoorGrillIcon sx={{
              width: 150,
              height: 150
            }} />
            <Typography component='p'>
              Trabajar con ingredientes locales y aprender sobre la cocina ecuatoriana tradicional, al mismo tiempo que incentiva la innovación y la creatividad en la cocina.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h5' className='fw-bold' >
              Emprendimiento y gestión de negocios
            </Typography>
            <BusinessCenterIcon sx={{
              width: 150,
              height: 150
            }} />
            <Typography component='p'>
              Formación en administración de restaurantes, marketing gastronómico, y estrategias para iniciar y mantener un negocio gastronómico exitoso.
            </Typography>
          </Grid>
        </Grid>
        {/* <Button variant='contained' >Mas información</Button> */}
      </Container>

      {/**Tercer sección */}
      <div className='d-flex flex-column justify-content-center align-items-center text-center ' style={{
        backgroundImage: "url('/assets/fondo.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '250px',
      }}>
        <Typography variant='h4' color='white' > PROGRAMA DE PASANTÍAS</Typography>
        <Typography component='p' color='white' fontWeight='bold' className='px-3' > ¡Descubre tu pasión culinaria y adquiere experiencia práctica en nuestra escuela de gastronomía! Únete a nuestro emocionante programa de pasantías,
          donde trabajarás junto a talentosos chefs en un entorno real de cocina. Prepárate para una exitosa carrera culinaria. </Typography>
        <Button variant='contained' color='error' >Mas información</Button>
      </div>

      {/** Cuarta sección */}
      <Container className='d-flex flex-column justify-content-center align-items-center text-center my-3' style={{
        // backgroundImage:`url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '250px',
      }}>
        <Typography variant='h4' >NUESTROS SERVICIOS</Typography>
        <Typography component='p'  >
          Nos dedicamos a brindar formación profesional en el campo culinario,
          enfocándonos en capacitar a la comunidad de la Zona Centro del Ecuador para
          que puedan emprender su propio negocio gastronómico con éxito, adquiriendo las habilidades necesarias en el arte culinario.
        </Typography>
        <Grid container className='d-flex flex-column flex-sm-row my-3'>
          <Grid item xs={12} md={4} >
            <Typography variant='h5' className='fw-bold'>
              Catering Personalizado
            </Typography>
            <MenuBookIcon sx={{
              width: 150,
              height: 150
            }} />
            <Typography component='p'>
              Servicio de catering adaptado a las necesidades específicas de cada evento, ofreciendo menús a medida que van desde comidas tradicionales hasta opciones modernas y creativas.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} >
            <Typography variant='h5' className='fw-bold'>
              Talleres y Clases de Cocina
            </Typography>
            <SchoolIcon sx={{
              width: 150,
              height: 150
            }} />
            <Typography component='p'>
              Clases de cocina interactivas para individuos o grupos, impartidas por chefs expertos que enseñan desde técnicas básicas hasta platos gourmet avanzados.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} >
            <Typography variant='h5' className='fw-bold'>
              Eventos Gastronómicos
            </Typography>
            <CelebrationIcon sx={{
              width: 150,
              height: 150
            }} />
            <Typography component='p'>
              Planificación y ejecución de eventos culinarios, incluyendo festivales de comida, ferias y degustaciones que destacan la gastronomía local e internacional.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/** Quinta sección */}

 
      <div className='d-flex flex-column justify-content-center align-items-center text-center ' style={{
        backgroundImage: "url('/assets/fondo.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '250px',
      }}>
        <Container className='d-flex flex-column flex-sm-row align-items-center' >
          <Image alt='xx' src={'/assets/va.jpeg'} width={300} height={200} />
          <Typography component='p' color='white' >
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
      </div>

      {/**Sexta sección */}
      <Container className='d-flex flex-column justify-content-center align-items-center text-center ' style={{
        // backgroundImage:`url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
      }}>
        <Typography variant='h4'> OFERTA ACADÉMICA </Typography>
        <Grid container className='d-flex flex-column flex-sm-row my-3'>
          <Grid item xs={12} md={4} >
            <Typography variant='h5' fontWeight='bold' >
              Cursos cortos
            </Typography>
            {cortos.map(c => (
              <Typography variant='h5' key={c.id} >
                {c.topic}
              </Typography>
            ))}

          </Grid>
          <Grid item xs={12} md={4} >
            <Typography variant='h5' fontWeight='bold' >
              Cursos largos
            </Typography>
            {largos.map(l => (
              <Typography variant='h5' key={l.id} >
                {l.topic}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={4} >
            <Typography variant='h5' fontWeight='bold' >
              Master class
            </Typography>
            {master.map(mc => (
              <Typography variant='h5' key={mc.id} >
                {mc.topic}
              </Typography>
            ))}
          </Grid>

        </Grid>
        <Button variant='contained' color='error' onClick={goToCourses} >Mas información</Button>
      </Container>

      <Footer />

    </>
  )
}
