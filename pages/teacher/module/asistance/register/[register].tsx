import { enagApi } from '@/apis'
import { Layout } from '@/components/layouts'
import { InscriptionModel, ModuleModel, StudentModel } from '@/models'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { TableRegister } from '../../../../../components/teacher/Asistance/TableRegister';

interface Props {
  students: StudentModel[]
}

export const MyAsistanceRegisterById: NextPage<Props> = ({ students }) => {
  const router = useRouter();

  return (
    <Layout title='My register asistance'>
      <TableRegister students={students} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const data: any[] = [

  ]

  return {
    paths: data.map(m => ({
      params: {
        register: m.register
      }
    })),
    fallback: 'blocking'
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { register } = params as { register: string };
  const qp = register.split('&');

  const asistance_id = qp[0].toString().substring('asistance_id'.length);
  const module_id = qp[1].toString().substring('module_id='.length);

  const { data: module } = await enagApi.get<ModuleModel>(`/modules/module_id=${module_id}`);

  const { data: inscriptions } = await enagApi.get<InscriptionModel[]>(`/inscriptions/course_id=${module.course_id}`);

  const studentPromises = inscriptions.map(async (inscription) => {
    const { data: student } = await enagApi.get<StudentModel[]>(`/students/student_id=${inscription.student_id}`);
    return student;
  })
  const students = await Promise.all(studentPromises);

  return {
    props: {
      students
    }
  }

}

export default MyAsistanceRegisterById;