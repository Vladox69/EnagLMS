import { enagApi } from '@/apis'
import { Layout } from '@/components/layouts'
import { MyContext } from '@/context/my'
import { GradesI } from '@/interface'
import { ActivityModel, SectionModel, SubmissionModel } from '@/models';
import { Container } from '@mui/material'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React, { useContext, useState } from 'react'
import { TableGrades } from '../../../../../components/my/grade/TableGrades';

interface Props {
    grades: GradesI
}

export const MyGradeById: NextPage<Props> = ({ grades: g }) => {

    const [grades, setGrades] = useState<GradesI>(g)
    const { user } = useContext(MyContext)
    console.log(grades);

    return (
        <Layout>
            <Container className='container bg-primary' >
                <TableGrades  grades={grades} />
            </Container>
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const data: any[] = [

    ]

    return {
        paths: data.map(m => ({
            params: {
                grade: m.grade
            }
        })),
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { grade } = params as { grade: string };

    const regex = /^student_id=([0-9]+)&module_id=([0-9]+)$/;
    const isValid = regex.test(grade);

    if (isValid) {
        const qp = grade.split('&')
        const student_id = qp[0].substring(`student_id=`.length)
        const module_id = qp[1].substring(`module_id=`.length)

        const { data: sect } = await enagApi.get<SectionModel[]>(`/sections/module_id=${module_id}`)
        const activitiesPromises = sect.map(async (section) => {
            const { data: activities } = await enagApi.get<ActivityModel[]>(`/activities/section_id=${section.id}`)
            return activities;
        })
        const activitiesRes = await Promise.all(activitiesPromises);

        const acts = activitiesRes.flat();

        const submissionsPromises = acts.map(async (activity) => {
            const { data: submission } = await enagApi.get<SubmissionModel>(`/submissions/student_id=${student_id}&activity_id=${activity.id}`)
            return submission
        })

        const submissions = await Promise.all(submissionsPromises)



        const sections = sect.map((section) => {
            const activities_no_sub = acts.filter((activity) => activity.section_id == section.id)
            let total=0

            const activities = activities_no_sub.map((act) => {
                const submission = submissions.find((s) => s.activity_id == act.id)
                total= total + submission?.grade!;    
                return {
                    ...act,
                    submission
                }
            })

            const sections = {
                ...section,
                activities
            }
            total=total/activities.length;
            return {
                ...sections,
                total
            }
        })
        const grades = {
            id:0,
            sections
        }

        return {
            props: {
                grades,
            }
        }
    } else {
        return {
            redirect: {
                destination: `/my`,
                permanent: false
            }
        }
    }

    // console.log(grades);


}

export default MyGradeById;