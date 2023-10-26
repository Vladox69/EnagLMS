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
      <Container className='bg-danger d-flex' component='div' onClick={onClickModule} >
        <Image
          src={bgImage}
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <Container className='text-end'>
          <Typography component='h6' >
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
