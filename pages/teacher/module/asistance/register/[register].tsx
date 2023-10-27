import { enagApi } from '@/apis'
import { Layout } from '@/components/layouts'
import { AsistanceModel, AsistanceRegisterModel, InscriptionModel, ModuleModel, StudentModel } from '@/models'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { TableRegister } from '../../../../../components/teacher/Asistance/TableRegister';
import { AsistanceStudentI } from '@/interface'

interface Props {
  asistance_students: AsistanceStudentI[]
}

export const MyAsistanceRegisterById: NextPage<Props> = ({ asistance_students }) => {
  const router = useRouter();

  return (
    <Layout title='My register asistance'>
      <TableRegister asistance_students={asistance_students} />
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

  const asistance_id = qp[0].toString().substring('asistance_id='.length);

  const { data: asistance_registers } = await enagApi.get<AsistanceRegisterModel[]>(`/asistances/registers/asistance_id=${asistance_id}`);

  const {data:asis}=await enagApi.get<AsistanceModel>(`/asistances/asistance_id=${asistance_id}`);

  const studentsPromises = asistance_registers.map(async (register) => {
    const { data: student } = await enagApi.get<StudentModel[]>(`/students/student_id=${register.student_id}`);
    return student;
  })

  const students = await Promise.all(studentsPromises);

  const asistance_students = asistance_registers.map((register) => {

    const student: any = students.find((st: any) => st.id == register.student_id);

    const asistance_student = {
      id: register.id,
      student: student.ID_card_url,
      tipo_sesion: asis.description,
      estado: register.status
    }

    return asistance_student
  })

  return {
    props: {
      asistance_students
    }
  }

}

export default MyAsistanceRegisterById;