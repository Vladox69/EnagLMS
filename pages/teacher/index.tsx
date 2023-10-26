import { Layout } from '@/components/layouts'
import { Container } from '@mui/material'
import React, { useContext } from 'react'
import { GridTModule } from '../../components/teacher/GridTModule';
import { TeacherContext } from '@/context/teacher';

export default function Teacher() {
  const {modules} = useContext(TeacherContext)

  return (
    <Layout>
      <Container className='container bg-primary'>
        <GridTModule modules={modules}/>
      </Container>
    </Layout>
  )
}
