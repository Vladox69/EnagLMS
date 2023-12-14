import { enagApi } from '@/apis';
import { Layout } from '@/components/layouts';
import { ActivityModel, ActivityResourceModel, StudentModel, SubmissionModel } from '@/models';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react'
import { Typography, Container, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { TableSubmission } from '@/components/teacher/Activity/Submission/TableSubmission';
import { SubmissionStudentI } from '@/interface/submission_student';
import { useRouter } from 'next/router';
import { GridTActivityResource } from '@/components/teacher/Activity/Resource/GridTActivityResource';
import { FormActivityResource } from '@/components/teacher/Activity/Resource/FormActivityResource';

interface Props {
  activity: ActivityModel,
  submission_students: SubmissionStudentI[],
  activity_resources: ActivityResourceModel[]
}

export const TeacherActivityById: NextPage<Props> = ({ activity, submission_students, activity_resources }) => {

  console.log(activity_resources);

  const router = useRouter()

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  const handleFormSubmit = (formData: any) => {
    if (formData.status == 200) {
      //TODO: Rehidratación de la página añadir a la lista el nuevo recurso       
      handleClose();
    } else {

    }
  }

  // const goToNewResource = () => {
  //   const { activity: id } = router.query
  //   router.push({
  //     pathname: '/teacher/module/section/activity/resource/new',
  //     query: { activity_id: id }
  //   })
  // }

  return (
    <Layout title='My activity'>
      <Container className='container' >
        <Container className='container' >
          <Typography variant='h4'> {activity.title} </Typography>
          <Typography component='p' dangerouslySetInnerHTML={{
            __html: activity.content
          }} />
          <Typography component='p' className='fw-bold'> Límite de entrega </Typography>
          <Typography component='p'> {activity.time_due.toString()} </Typography>
          <Typography component='p'> Recursos </Typography>
          <GridTActivityResource resources={activity_resources} />
          {/* <Button variant='contained' onClick={goToNewResource}> Añadir recurso </Button> */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
            <DialogTitle id="form-dialog-title" className='text-center' >Nuevo recurso</DialogTitle>
            <DialogContent>
              <FormActivityResource activity_id={activity.id} onSubmitResource={handleFormSubmit} />
            </DialogContent>

          </Dialog>
          <Button variant='contained' className='my-2' color='error' onClick={handleOpen}> Añadir recurso </Button>
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

  const { data: activity_resources } = await enagApi.get<ActivityResourceModel[]>(`/activities/resources/activity_id=${id}`)

  const { data: submissions } = await enagApi.get<SubmissionModel[]>(`/submissions/activity_id=${activity.id}`);

  const studentPromises = submissions.map(async (submission) => {
    const { data: student } = await enagApi.get<StudentModel>(`/students/student_id=${submission.student_id}`);
    return student;
  })

  const students = await Promise.all(studentPromises);

  const resourcePromises = submissions.map(async (submission) => {
    const { data: resource } = await enagApi.get(`/submissions/resources/submission_id=${submission.id}`)
    return resource;
  })

  const data = await Promise.all(resourcePromises);
  const resources = data.flat();
  const submission_students = submissions.map((submission) => {
    const student = students.find((s) => s.id == submission.student_id)
    const resource = resources.filter((r) => r.submission_id == submission.id)

    return {
      id_submission: submission.id,
      id_student: student?.id,
      student: student?.ID_card_url,
      submission: submission,
      resources: resource || 'No entregado'
    }
  })

  return {
    props: {
      activity,
      submission_students,
      activity_resources
    }
  }

}



export default TeacherActivityById;