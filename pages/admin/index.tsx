import React from 'react'
import { Layout } from "@/components/layouts";
import { Container, Grid, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Face6Icon from '@mui/icons-material/Face6';
import ClassIcon from '@mui/icons-material/Class';
import SchoolIcon from '@mui/icons-material/School';
import Link from 'next/link';

export default function Admin() {

    return (
        <Layout title='Mi espacio personal' >
            <Container className='container bg-primary' >
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Button sx={{ width: 150, height: 150 }} variant='contained' className='rounded-circle' >
                            <Link href={'/admin/teachers'} className='' >
                                <PersonIcon sx={{ width: 125, height: 125 }} />
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button sx={{ width: 150, height: 150 }} variant='contained' className='rounded-circle' >
                            <Link href={'/admin/students'}>
                                <Face6Icon sx={{ width: 125, height: 125 }} />
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button sx={{ width: 150, height: 150 }} variant='contained' className='rounded-circle' >
                            <Link href={'/admin/courses'} >
                            <ClassIcon sx={{ width: 125, height: 125 }} />

                            </Link>
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button sx={{ width: 150, height: 150 }} variant='contained' className='rounded-circle' >
                            <Link href={'/admin/inscriptions'} >
                            <SchoolIcon sx={{ width: 125, height: 125 }} />
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};