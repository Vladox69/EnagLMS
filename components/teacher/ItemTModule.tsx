import { Container, Divider, Typography } from '@mui/material'
import React, { FC, useContext } from 'react'
import bgImage from '@/assets/fondo.jpg';
import Image from 'next/image';
import { ModuleModel } from '@/models';
import { useRouter } from 'next/router';

interface Props {
  module: ModuleModel
}

export const ItemTModule: FC<Props> = ({ module }) => {
  const router = useRouter();

  const onClickModule = () => {
    router.push(`/teacher/module/${module.id}`)
  }

  return (
    <>
      <Container className='d-flex border rounded' component='div' onClick={onClickModule} style={{ cursor: 'pointer' }} sx={{
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
      }} >
        <Image
          src={bgImage}
          width={100}
          height={100}
          alt="Picture of the author"
          style={{
            transition: 'transform 0.3s',
          }}
        />
        <Container className='text-end'>
          <Typography component='h2' >
            {module.title}
          </Typography>
          <Typography component='h6' >
            {module.course_id}
          </Typography>
        </Container>
      </Container>
      <Divider />
    </>
  )
}
