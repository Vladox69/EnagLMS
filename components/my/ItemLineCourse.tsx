import { Container, Typography, Divider, Box } from '@mui/material';
import React, { FC } from 'react'
import Image from 'next/image';
import bgImage from '@/assets/fondo.jpg';
import { useRouter } from 'next/router';
import { CourseModel } from '@/models';
import styles from '@/styles/Custom.module.css'


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
            <Container className={styles.hover_effect+' d-flex border rounded mb-2'} component='div' onClick={goToCourseById} >
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
                        {course.start_at.toString().substring(0,course.start_at.toString().indexOf('T'))} - {course.end_at.toString().substring(0,course.end_at.toString().indexOf('T'))}
                    </Typography>
                </Container>
            </Container>
            <Divider />
        </>
    )
}
