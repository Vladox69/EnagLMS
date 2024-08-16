import React from 'react'
import { Container } from '@mui/material';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import '@react-pdf-viewer/core/lib/styles/index.css';


interface Props {
    resource: string;
}

export const MyResourceById: NextPage<Props> = ({ resource }) => {


    return (
        < >
            {resource}
            <Container  style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '750px',
            }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl="/assets/test.pdf" />
                </Worker>
            </Container>
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const resource = ['123', '456', '789']

    const data: any[] = [
        { resource: '1' },
        { resource: '2' },
        { resource: '3' },
    ]

    return {
        paths: data.map(r => ({
            params: {
                resource: r.resource
            }
        })),
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { resource } = params as { resource: string };

    return {
        props: {
            resource
        }
    }

}


export default MyResourceById;