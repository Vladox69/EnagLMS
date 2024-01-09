import { Layout } from '@/components/layouts';
import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material';
import Image from 'next/image';

import { ListCourse } from '@/components/my/ListCourse';
import { CourseModel, InscriptionModel, StudentModel } from '@/models';
import { enagApi } from '@/apis';

export default function My() {

    const [courses, setCourses] = useState<CourseModel[]>([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const { data: p } = await enagApi.get(`/auth/profile`)
        const { data: s } = await enagApi.get<StudentModel>(`/students/user_id=${p.user_id}`)
        const { data: ins } = await enagApi.get<InscriptionModel[]>(`/inscriptions/student_id=${s.id}`);
        const coursesPromises = ins.map(async (insc) => {
            const { data: course } = await enagApi.get<CourseModel>(`/courses/course_id=${insc.course_id}`)
            return course;
        })

        const c = await Promise.all(coursesPromises);
        setCourses(c)
    }

    return (
        <Layout title='Mi espacio personal'>
            {/* <Container className='container bg-primary' >
                <Image
                    src="/profile.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                Perfil
            </Container> */}

            <ListCourse courses={courses} />

        </Layout>
    );
}
