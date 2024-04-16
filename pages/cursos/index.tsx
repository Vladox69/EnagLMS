import { enagApi } from '@/apis';
import { Navbar, Footer } from '@/components/ui'
import { CourseModel } from '@/models';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Cursos() {

    const router = useRouter()

    useEffect(() => {
        getData()
      }, [])

    const [shortCourses,setShortCourses]=useState<CourseModel[]>([])
    const [largeCourses,setLargeCourses]=useState<CourseModel[]>([])
    const [masterClass,setMasterClass]=useState<CourseModel[]>([])

    const onClickPersonalizada = () => {
        router.push(`/cursos/personalizado`)
    }

    const goToCourse=(id:number)=>{
        router.push(`/cursos/curso/${id}`)
    }

    /* const cursosCortos = [
        { id: 1, title: 'Panaderia', content: 'Domina el arte de la panadería en ENAG y convierte los granos en oro horneado con nuestro curso intensivo de panadería artesanal.', image: '/assets/curso-panadero.jpg' },
        { id: 2, title: 'Coctelería', content: 'Sumérgete en el vibrante mundo de la coctelería con ENAG, donde aprenderás a mezclar sabores y emociones en cada copa que crees.', image: '/assets/curso-cocteleria.jpg' },
        { id: 3, title: 'Cocina fría', content: 'Descubre el arte de la cocina fría con ENAG, donde te enseñaremos a preparar platos que sorprenden y refrescan el paladar, perfectos para cualquier ocasión.', image: '/assets/cocina-fria.jpg' }
    ] */

  /*   const cursosLargos = [
        { id: 1, title: 'Tecnificación gastronómica', content: 'Impulsa tu habilidad culinaria con nuestro curso de Tecnificación Gastronómica, integrando las últimas tecnologías y métodos innovadores para revolucionar tu cocina.', image: '/assets/chef-artesano.jpg' },
        { id: 2, title: 'Chef artesano', content: 'Perfecciona el arte de la cocina con nuestro curso de Chef Artesano, donde la tradición se une a la técnica para crear platos con sabor y presentación inigualables.', image: '/assets/chef-profesional.jpg' },
        { id: 3, title: 'Cocina oriental', content: 'Descubre los secretos de la cocina oriental en nuestro curso intensivo: técnicas auténticas, ingredientes exóticos y recetas tradicionales para enriquecer tu repertorio culinario.', image: '/assets/sushi-mc.jpg' },
    ]
 */
    const getData = async () => {
        const {data}=await enagApi.get<CourseModel[]>(`/courses`);
        const sc=data.filter((d)=>d.type=='short');
        const lc=data.filter((d)=>d.type=='large');
        const mc=data.filter((d)=>d.type=='master class');
        
        setShortCourses(sc)
        setLargeCourses(lc)
        setMasterClass(mc)
    }

    return (
        <>
            <Box>
                <Navbar />
            </Box>

            <Container className='d-flex flex-column justify-content-center align-items-center text-center ' style={{
                // backgroundImage:`url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '500px',
            }}>
                <Typography variant='h3' >
                    CURSOS
                </Typography>
                <Container className='d-flex justify-content-center'>
                    <Typography component='p' width={1500} sx={{
                        textAlign: 'justify'
                    }}>
                        En ENAG, cada curso es una aventura culinaria que espera ser descubierta.
                        Nuestros cursos están meticulosamente diseñados para adaptarse a una variedad de habilidades y aspiraciones, desde principiantes apasionados hasta profesionales que buscan perfeccionar su arte.
                        Al sumergirse en nuestros programas, los estudiantes explorarán la riqueza de la cocina tradicional y contemporánea, aprenderán técnicas de vanguardia y obtendrán conocimientos esenciales sobre la industria gastronómica.
                        Con instalaciones de última generación y maestros reconocidos, ENAG es el lugar donde su amor por la cocina se elevará a nuevas alturas.
                        Descubre el curso que encenderá tu creatividad y te impulsará hacia tu futuro culinario.
                    </Typography>
                </Container>

                <Container>
                    <Typography variant='h4' className='text-center' >
                        Cursos cortos
                    </Typography>
                    <Grid container spacing={2} >
                        {
                            shortCourses.map((cc) => (
                                <Grid key={cc.id} item xs={12} md={4}  >
                                    <Card variant='outlined'>
                                        <CardMedia
                                            component="img"
                                            alt="curso.png"
                                            image={cc.img_url}
                                            height={200}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {cc.topic}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{
                                                textAlign:'justify'
                                            }} >
                                                {cc.content}
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ justifyContent: 'center' }}>
                                            <Button variant='contained' size="small" color='error' onClick={()=>goToCourse(cc.id)}>Más información</Button>
                                        </CardActions>
                                    </Card>

                                </Grid>
                            ))
                        }

                    </Grid>
                </Container>

                <Container>
                    <Typography variant='h4' className='text-center' >
                        Cursos largos
                    </Typography>
                    <Grid container spacing={2} >
                        {
                            largeCourses.map((cl) => (
                                <Grid key={cl.id} item xs={12} md={4}  >
                                    <Card variant='outlined'>
                                        <CardMedia
                                            component="img"
                                            alt="curso.png"
                                            image={cl.img_url}
                                            height={200}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {cl.topic}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {cl.content}
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ justifyContent: 'center' }}>
                                            <Button variant='contained' size="small" color='error' onClick={()=>goToCourse(cl.id)} >Más información</Button>
                                        </CardActions>
                                    </Card>

                                </Grid>
                            ))
                        }

                    </Grid>
                </Container>

                <Container>
                    <Typography variant='h4' className='text-center' >
                        Master clases
                    </Typography>
                    <Grid container spacing={2} >
                       {
                        masterClass.map((mc) => (
                            <Grid key={mc.id} item xs={12} md={4}  >
                                <Card variant='outlined'>
                                    <CardMedia
                                        component="img"
                                        alt="curso.png"
                                        image={mc.img_url}
                                        height={200}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {mc.topic}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {mc.content}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ justifyContent: 'center' }}>
                                        <Button variant='contained' size="small" color='error' onClick={()=>goToCourse(mc.id)} >Más información</Button>
                                    </CardActions>
                                </Card>

                            </Grid>
                        ))
                       }
                    </Grid>
                </Container>

                <Container>
                    <Typography variant='h4' className='text-center' >
                        Clases personalizadas
                    </Typography>
                    <p style={{
                        textAlign: 'justify'
                    }} >
                        Descubre una nueva forma de aprender con nuestras clases personalizadas,
                        diseñadas para adaptarse a tus necesidades y objetivos únicos. Ya sea que estés buscando mejorar tus habilidades en un área específica,
                        prepararte para un examen importante o explorar un nuevo pasatiempo, nuestras clases están hechas a medida para ofrecerte una experiencia de aprendizaje eficiente y agradable. Con instructores expertos y un enfoque centrado en el estudiante, te ayudamos a alcanzar tus metas a tu propio ritmo.
                        Únete a nosotros y transforma tu educación en una experiencia verdaderamente personalizada y enriquecedora.
                    </p>
                    <Button variant='contained' className='mb-2' color='error' onClick={onClickPersonalizada} >Mas información</Button>
                </Container>

            </Container>

            <Footer />
        </>
    )
}
