import { Layout } from '@/components/layouts';
import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material';
import Image from 'next/image';

import { ListCourse } from '@/components/my/ListCourse';
import { CourseModel, InscriptionModel, InternCourseModel, InternInscriptionModel, StudentModel } from '@/models';
import { enagApi } from '@/apis';
import { ListCourseIntern } from '@/components/my/intern/ListCourseIntern';

export default function My() {

    const [courses, setCourses] = useState<CourseModel[]>([])
    const [coursesIntern, setCoursesIntern] = useState<InternCourseModel[]>([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const { data: p } = await enagApi.get(`/auth/profile`)
        const { data: s } = await enagApi.get<StudentModel>(`/students/user_id=${p.user_id}`)
        const { data: ins } = await enagApi.get<InscriptionModel[]>(`/inscriptions/student_id=${s.id}`);
        const {data:inter_ins}=await enagApi.get<InternInscriptionModel[]>(`/intern_inscription/student_id=${s.id}`)
        const course_ids=inter_ins.map((intern)=>{return intern.course_id})
        const {data:cour_intern}=await enagApi.post<InternCourseModel[]>(`/intern_course/course_ids`,{course_ids})
        setCoursesIntern(cour_intern)
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
            <ListCourseIntern courses={coursesIntern} />
            <ListCourse courses={courses} />

        </Layout>
    );
}
