import { Layout } from '@/components/layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@mui/material';
import { TableAsistance } from '../../../../components/teacher/Asistance/TableAsistance';
import { AsistanceModel } from '@/models';
import { enagApi } from '@/apis';
import { useRouter } from 'next/router';
import styles from '@/styles/Custom.module.css'
import Swal from 'sweetalert2';

interface Props {
  asistances: AsistanceModel[]
}

export const MyAsistanceModuleById: NextPage<Props> = ({ }) => {

  const router = useRouter();
  const [asistances, setAsistances] = useState<AsistanceModel[]>([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (router.isReady) {
      getData()
    }
  }, [router.isReady])

  const getData = async () => {
    setIsLoading(true)
    try {
      const { asistance } = router.query
      const { data: ast } = await enagApi.get<AsistanceModel[]>(`/asistances/module_id=${asistance}`);
      setAsistances(ast)
      setIsLoading(false)
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos porblemas al cargar los datos",
      });
      setIsLoading(false)      
    }
  }

  const goToNewRegister = () => {
    const { asistance } = router.query
    router.push({
      pathname: '/teacher/module/asistance/new',
      query: { module_id: asistance }
    });
  }

  const goBack = () => {
    router.back()
  }

  return (
    <Layout title='My asistance module'>
      <Typography variant='h4' className='mb-2'> Tabla de asistencias por módulo </Typography>
      <TableAsistance asistances={asistances} />
      <Button variant='contained' onClick={goToNewRegister} color='error' className='mt-2'> Nuevo registro </Button>
      <Button variant='contained' onClick={goBack} className={styles.black_button + ' mt-2 ms-2'}> Cancelar </Button>
    </Layout>
  )
}


export default MyAsistanceModuleById;