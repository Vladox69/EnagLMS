import { Layout } from '@/components/layouts';
import React from 'react'
import { Container, Typography, Divider } from '@mui/material';
import Image from 'next/image';

import bgImage from '@/assets/fondo.jpg';
import { ListCourse } from '../../components/my/ListCourse';

export default function My() {

    

    return (
        <Layout title='Mi espacio personal' >
            <Container className='container bg-primary' >
                <Image
                    src="/profile.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                Perfil
            </Container>
            
            <ListCourse />

        </Layout>
    );
}
