import { Layout } from '@/components/layouts'
import React from 'react'
import { Container, Typography } from '@mui/material';
import { StudentModel, SubmissionModel, SubmissionResourceModel } from '@/models';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { enagApi } from '@/apis';
import { FormSubmission } from '../../../../../../components/teacher/Activity/Submission/FormSubmission';

interface Props{
    submission:SubmissionModel;
    student:StudentModel;
    resource:SubmissionResourceModel
}

export const TeacherSubmissionById:NextPage<Props>  = ({submission,student,resource}) => {

    return (
    <Layout title='Submission'>
        <Container className='container bg-primary'>
            <Container className='container bg-danger'>
                <Typography component='p'> Entrega </Typography>
                <Typography component='p'> {submission.state_gra} Sin calificar</Typography>
                <Typography component='p'> {submission.state_sub} Enviado para calificar</Typography>
                <Typography component='p'> {resource.url_resource} </Typography>
                <FormSubmission submission={submission} />
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
          submission: m.submission
        }
      })),
      fallback: 'blocking'
    }
  }
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { submission: id } = params as { submission: string };

    const {data:submission} = await enagApi.get<SubmissionModel>(`/submissions/submission_id=${id}`)
    const {data:student}=await enagApi.get<StudentModel>(`/students/student_id=${submission.student_id}`)
    const {data:resource}=await enagApi.get<SubmissionResourceModel>(`/submissions/resources/submission_id=${submission.id}`)

    return {
      props: {
        submission,
        student,
        resource
      }
    }
  
  }
  
export default TeacherSubmissionById;