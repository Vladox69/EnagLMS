import { SectionResourceModel } from '@/models'
import { NextPage } from 'next'
import React from 'react'
import { Container, Typography } from '@mui/material';

interface Props {
    resource: SectionResourceModel
}

export const TeacherResourceById: NextPage<Props> = ({ resource }) => {
    return (
        <>
            <Container className='container bg-primary'>
                <Container className='container bg-danger'>
                    <Typography component='p'> {resource?.title} </Typography>
                    
                    {
                        // TODO: Poner el documento 
                    }


                </Container>
            </Container>
        </>
    )
}

export default TeacherResourceById;