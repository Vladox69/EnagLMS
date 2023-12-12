import { NextPage } from 'next';
import React, { useEffect, useState } from 'react'
import { Navbar, Footer } from '../../../components/ui';
import { Container, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styles from './curso.module.css';
import { enagApi } from '@/apis';
import { useRouter } from 'next/router';
import { CourseModel, ModuleModel } from '@/models';

interface Props {
    curso: string;
}


export const CursoByName: NextPage<Props> = () => {

    const router = useRouter()
    const [course, setCourse] = useState<CourseModel>()
    const [modules, setModules] = useState<ModuleModel[]>([])
    useEffect(() => {
        if (router.isReady) {
            getData()
        }
    }, [router.isReady])


    const getData = async () => {
        const { curso } = router.query
        const { data: c } = await enagApi.get<CourseModel>(`/courses/course_id=${curso}`)
        setCourse(c)
        const { data: mm } = await enagApi.get(`/modules/course_id=${c.id}`)
        setModules(mm)
    }

    return (
        <>
            <Navbar />
            <div style={{
                backgroundImage: "url('/assets/fondo.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '500px',
                position: 'relative',
            }} >
                <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '20px',
                    background: 'rgba(0, 0, 0, 1)',
                    padding: '20px',
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}>
                    {course?.topic}
                </div>
            </div>
            <Container className='mt-5' >
                <p>
                    {course?.content}
                </p>
                <p>
                    <AccessTimeIcon /> 2 Periodos / Duración
                </p>
                <Typography variant='h4' > Objetivo general </Typography>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vel iusto similique fuga eveniet quibusdam magnam rem blanditiis doloribus nam iure,
                    obcaecati sapiente hic, ad praesentium saepe quod culpa.
                    Quam, fugit.
                </p>
                <Typography variant='h4' > Mecanismo de titulación </Typography>
                <p>Proyecto</p>
                <Typography variant='h4' > Modalidad </Typography>
                <p>Presencial</p>
                <Typography variant='h4' > Programa </Typography>
                <table className="table table-striped">
                    <thead>
                        <tr>

                            <th scope="col">Módulo</th>
                            <th scope="col" className='text-end'>Horas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            modules.map((module) => (
                                <tr>
                                    <td> {module.title} </td>
                                    <td className='text-end'>{module.teacher_id}</td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
                <Typography variant='h4' > Requisitos </Typography>
                <ul className=" w-50 list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
            </Container>
            <Footer />
        </>
    )
}

export default CursoByName;