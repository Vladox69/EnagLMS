import { Curso } from '@/interface';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'
import { Navbar, Footer } from '../../../components/ui';
import { Container } from 'react-bootstrap';
import Image from 'next/image';

import bgImage from '@/assets/fondo.jpg';
import { Typography } from '@mui/material';

import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface Props {
    curso: string;
}


export const CursoByName: NextPage<Props> = ({ curso }) => {
    return (
        <>
            <Navbar />
            <Container fluid>
                <Image src={bgImage} alt='img-bg' style={{
                    width: 'auto',
                    height: 400
                }} />
                <Typography variant='h1' > {curso} </Typography>
            </Container>
            <Container fluid>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nemo suscipit obcaecati.
                    Rerum quasi necessitatibus accusantium sit labore recusandae, ipsam placeat suscipit nihil atque architecto officia.
                    Omnis delectus quod laboriosam.
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
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
                <Typography variant='h4' > Requisitos </Typography>
                <ul className="list-group list-group-flush">
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

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const data: Curso[] = [
        { nombre: 'sss' },
        { nombre: 'aaa' },
        { nombre: 'bbb' }
    ]
  
    return {
      paths: data.map(c => ({
        params: { 
            curso:c.nombre
         }
      })),
      //fallback: false
      fallback:'blocking'
    }
  }

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {curso} = params as {curso:string};

    return {
        props: {
            curso
        }
    }
}


export default CursoByName;