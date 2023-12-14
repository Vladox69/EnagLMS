import { Layout } from '@/components/layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'
import { Button, Typography } from '@mui/material';
import { TableAsistance } from '../../../../components/teacher/Asistance/TableAsistance';
import { AsistanceModel } from '@/models';
import { enagApi } from '@/apis';
import { useRouter } from 'next/router';
import styles from '@/styles/Custom.module.css'

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

  const goBack=()=>{
    router.back()
  }

  return (
    <Layout title='My asistance module'>
      <Typography variant='h4' className='mb-2'> Tabla de asistencias por materia </Typography>
      <TableAsistance asistances={asistances} />
      <Button variant='contained' onClick={goToNewRegister} color='error' className='mt-2'> Nuevo registro </Button>
      <Button variant='contained' onClick={goBack} className={styles.black_button+' mt-2 ms-2'}> Cancelar </Button>
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