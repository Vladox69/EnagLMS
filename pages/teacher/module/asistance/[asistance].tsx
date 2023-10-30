import { Layout } from '@/components/layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'
import { Button } from '@mui/material';
import { TableAsistance } from '../../../../components/teacher/Asistance/TableAsistance';
import { AsistanceModel } from '@/models';
import { enagApi } from '@/apis';
import { useRouter } from 'next/router';

interface Props{
  asistances:AsistanceModel[]
}

export const MyAsistanceModuleById:NextPage<Props> = ({asistances}) => {

  const router = useRouter();
  const goToNewRegister=()=>{
    const {asistance}=router.query
    router.push({
      pathname:'/teacher/module/asistance/new',
      query:{module_id:asistance}
    });
  }


  return (
    <Layout title='My asistance module'>
      <Button variant='contained' onClick={goToNewRegister} > Nuevo registro de asistencia </Button>
      <TableAsistance asistances={asistances} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const data: any[] = [

  ]

  return {
      paths: data.map(m => ({
          params: {
              asistance: m.asistance
          }
      })),
      fallback: 'blocking'
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { asistance:module_id } = params as { asistance: string };
  const {data:asistances}= await enagApi.get<AsistanceModel[]>(`/asistances/module_id=${module_id}`);
  return {
      props: {
        asistances
      }
  }

}

export default MyAsistanceModuleById;