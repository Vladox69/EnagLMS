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
        const { data } = await enagApi.get(`/sections/resources/section_id=${section}`)
        setSectionResources(data);
    }


    return (
        <>
            {
                sectionResources.map((section_resource) => (
                    <ItemSectionResource key={section_resource.id} section_resource={section_resource} />
                ))
            }
        </>
    )
}
