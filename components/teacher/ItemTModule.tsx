import { Container, Divider, Typography } from '@mui/material'
import React, { FC, useContext, useEffect, useState } from 'react'
import bgImage from '@/assets/fondo.jpg';
import Image from 'next/image';
import { CourseModel, ModuleModel } from '@/models';
import { useRouter } from 'next/router';
import { enagApi } from '@/apis';

interface Props {
  module: ModuleModel
}

export const ItemTModule: FC<Props> = ({ module }) => {
  const router = useRouter();

  const [course, setCourse] = useState<CourseModel>()
  useEffect(() => {
    if(module.id){
      getData()
    }
  }, [router.isReady])
  
  const getData=async()=>{
    const {data}=await enagApi.get<CourseModel>(`/courses/course_id=${module.course_id}`)
    setCourse(data)
  }

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
          src={module.img_url}
          width={100}
          height={100}
          className='p-2'
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
            {course?.topic}
          </Typography>
        </Container>
      </Container>
      <Divider />
    </>
  )
}
