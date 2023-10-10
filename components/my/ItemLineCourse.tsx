import { Container, Typography, Divider, Box } from '@mui/material';
import React, { FC } from 'react'
import Image from 'next/image';
import bgImage from '@/assets/fondo.jpg';
import { useRouter } from 'next/router';
import { CourseModel } from '@/models';

interface Props {
    course: CourseModel
}

export const ItemLineCourse: FC<Props> = ({ course }) => {

    const router= useRouter();

    const goToCourseById=()=>{
        router.push(`/my/course/${course.id}`)
    }

    return (
        <>
            <Container className='bg-danger d-flex' component='div' onClick={goToCourseById} >
                <Image
                    src={bgImage}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />
                <Container className='text-end'>
                    <Typography component='h6' >
                        {course.topic}
                    </Typography>
                    <Typography component='h6' >
                        {course.start_at.toLocaleString()}-{course.end_at.toLocaleString()}
                    </Typography>
                </Container>
            </Container>
            <Divider />
        </>
    )
}
