import { enagApi } from '@/apis'
import { Layout } from '@/components/layouts'
import { InternModel } from '@/models'
import React, { useEffect, useState } from 'react'
import { TableAIntern } from '../../../components/admin/intern/TableAIntern';
import { Typography } from '@mui/material';

export default function Interns () {
    
    const [interns, setInterns] = useState<InternModel[]>([])

    useEffect(() => {
        getData();
    }, [])
    
    const getData=async()=>{
        const {data}= await enagApi.get<InternModel[]>(`/interns`)
        setInterns(data)
    }

    return (
    <Layout>
        <Typography variant='h4' className='mb-2' > Tabla de hojas de vida </Typography>
        <TableAIntern  interns={interns} />
    </Layout>
  )
}
