import { enagApi } from '@/apis';
import { Layout } from '@/components/layouts';
import { ActivityModel, StudentModel, SubmissionModel } from '@/models';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'
import { Typography, Container } from '@mui/material';
import { TableSubmission } from '../../../../../components/teacher/Activity/Submission/TableSubmission';
import { SubmissionStudentI } from '@/interface/submission_student';

interface Props {
  activity: ActivityModel,
  submission_students: SubmissionStudentI[]
}

export const TeacherActivityById: NextPage<Props> = ({ activity, submission_students }) => {
  return (
    <Layout title='My activity'>
      <Container className='container bg-primary' >
        <Container className='container bg-danger' >
          <Typography component='p'> Título </Typography>
          <Typography component='p'> {activity.title} </Typography>
          <Typography component='p'> Contenido </Typography>
          <Typography component='p'> {activity.content} </Typography>
          <Typography component='p'> Límite de entrega </Typography>
          <Typography component='p'> {activity.time_due.toString()} </Typography>
          <TableSubmission submissions={submission_students} />
        </Container>
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
        activity: m.activity
      }
    })),
    fallback: 'blocking'
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { activity: id } = params as { activity: string };
  const { data: activity } = await enagApi.get<ActivityModel>(`/activities/activity_id=${id}`);


  const { data: submissions } = await enagApi.get<SubmissionModel[]>(`/submissions/activity_id=${activity.id}`);

  const studentPromises = submissions.map(async (submission) => {
    const { data: student } = await enagApi.get<StudentModel>(`/students/student_id=${submission.student_id}`);
    return student;
  })

  const students = await Promise.all(studentPromises);

  const resourcePromises = submissions.map(async (submission) => {
    const { data: resource } = await enagApi.get(`/submissions/resources/resource_id=${submission.id}`)
    return resource;
  })

  const resources = await Promise.all(resourcePromises);

  const submission_students = submissions.map((submission) => {
    const student = students.find((s) => s.id == submission.student_id)
    const resource = resources.find((r) => r.submission_id == submission.id)


    return {
      id_submission: submission.id,
      id_student: student?.id,
      student: student?.ID_card_url,
      grade: submission.grade,
      resource: resource?.url_resource || 'No entregado'
    }
  })
  
  return {
    props: {
      activity,
      submission_students
    }
  }

}



export default TeacherActivityById;