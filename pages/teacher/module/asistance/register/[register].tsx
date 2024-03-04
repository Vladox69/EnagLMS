import { enagApi } from '@/apis'
import { Layout } from '@/components/layouts'
import { AsistanceModel, AsistanceRegisterModel,  StudentModel } from '@/models'
import {  NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { TableRegister } from '@/components/teacher/Asistance/TableRegister';
import { AsistanceStudentI } from '@/interface'

interface Props {
  asistance_students: AsistanceStudentI[]
}

export const MyAsistanceRegisterById: NextPage<Props> = ({ }) => {
  const router = useRouter();
  const [register, setRegister] = useState<AsistanceStudentI[]>([])
  const [asistance, setAsistance] = useState<AsistanceModel>()
  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady])

  const getData = async () => {
    const {register} = router.query
    const qp=(register??'').toString().split('&')
    const [q1,q2]=qp
    const asistance_id=q1.substring(q1.indexOf('=')+1)
    const {data:asis}=await enagApi.get<AsistanceModel>(`/asistances/asistance_id=${asistance_id}`);
    const {data:asis_reg}=await enagApi.get<AsistanceRegisterModel[]>(`/asistances/registers/asistance_id=${asistance_id}`);
    const studentsPromises = asis_reg.map(async (rega) => {
      const { data: student } = await enagApi.get<StudentModel[]>(`/students/student_id=${rega.student_id}`);
      return student;
    })
    const students = await Promise.all(studentsPromises);

    const data_res = asis_reg.map((rega) => {
      const student: any = students.find((st: any) => st.id == rega.student_id);
      const asistance_student = {
        id: rega.id,
        student: student,
        asistance:rega
      }
      return asistance_student
    })
    setRegister(data_res)
    setAsistance(asis)
  }

  return (
    <Layout title='My register asistance'>
      <TableRegister asistance_students={register} asistance={asistance!} />
    </Layout>
  )
}


export default MyAsistanceRegisterById;