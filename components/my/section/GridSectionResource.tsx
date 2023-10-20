import React, { FC, useState, useEffect } from 'react'
import { Container } from '@mui/material';
import { SectionResourceModel } from '@/models/section_resource';
import { enagApi } from '@/apis';
import { ItemSectionResource } from './ItemSectionResource';


interface Props {
    section: number;
}

export const GridSectionResource: FC<Props> = ({ section }) => {

    const [sectionResources, setSectionResources] = useState<SectionResourceModel[]>([])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const { data } = await enagApi.get(`/sections/resources/${section}`)
        setSectionResources(data);
    }


    return (
        <>
            <Container>
                {
                    sectionResources.map((section_resource)=>(
                       <ItemSectionResource section_resource={section_resource} />
                    ))
                }
            </Container>
        </>
    )
}
