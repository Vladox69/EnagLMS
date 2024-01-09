import { enagApi } from '@/apis'
import { Layout } from '@/components/layouts'
import { MyContext } from '@/context/my'
import { GradesI } from '@/interface'
import { ActivityModel, SectionModel, SubmissionModel } from '@/models';
import { Box, CircularProgress, Container } from '@mui/material';
import {NextPage } from 'next'
import React, { useContext, useEffect, useState } from 'react'
import { TableGrades } from '@/components/my/grade/TableGrades';
import { useRouter } from 'next/router';

interface Props {
    grades: GradesI
}

export const MyGradeById: NextPage<Props> = ({ }) => {

    const [grades, setGrades] = useState<GradesI>()
    const router = useRouter()
    useEffect(() => {
        if (router.isReady) {
            getData()
        }
    }, [router.isReady])

    const getData = async () => {
        const { grade } = router.query
        const qp = (grade ?? '').toString().split('&')
        const [q1, q2] = qp
        const student_id = q1.substring(`student_id=`.length)
        const module_id = q2.substring(`module_id=`.length)
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
            let total = 0

            const activities = activities_no_sub.map((act) => {
                const submission = submissions.find((s) => s.activity_id == act.id)
                total = total + submission?.grade!;
                return {
                    ...act,
                    submission
                }
            })
            const sections = {
                ...section,
                activities
            }
            total = total / activities.length;
            return {
                ...sections,
                total
            }
        })
        const gr: any = {
            id: 0,
            sections
        }
        setGrades(gr)
    }

    return (
        <Layout>
            <Container >
                {
                    (grades == undefined) ? (
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            minHeight="80vh" // Ajusta esta altura según tus necesidades
                        >
                            <CircularProgress size={100} color='error' />
                        </Box>
                    ) :
                        (<TableGrades grades={grades} />)
                }
            </Container>
        </Layout>
    )
}


export default MyGradeById;