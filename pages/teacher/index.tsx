import { Layout } from '@/components/layouts'
import { Container, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { GridTModule } from '../../components/teacher/GridTModule';
import { TeacherContext } from '@/context/teacher';

export default function Teacher() {
  const {modules} = useContext(TeacherContext)

  return (
    <Layout>
      <Container className='container'>
        <Typography variant='h4' className='mb-3'> Módulos académicos </Typography>
        <GridTModule modules={modules}/>
      </Container>
    </Layout>
  )
}
