import { prisma } from '@/apis';
import { SectionResourceModel } from '@/models';
import { deleteFile } from '@/utils/deleteFiles';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | { message: string ,count:number}    
    | SectionResourceModel[]
    | SectionResourceModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query
    switch (req.method) {
        case 'GET':
            if (id?.includes('section_id=')) {
                return getResourcesByIdSection(req, res);
            } else if (id?.includes('resource_id=')) {
                return getResourceById(req, res);
            }
        case 'DELETE':
            if(id?.includes('section_id=')){
                return deleteResourcesByIdSection(req,res)
            }else if(id?.includes('resource_id=')){
                return deleteResourceById(req,res)
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getResourcesByIdSection = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const section_id = id?.toString().substring('section_id='.length);
        const section_resources = await prisma.section_resource.findMany({
            where: {
                section_id: Number(section_id)
            }
        })
        if (!section_resources) {
            return res.status(200).json({ message: "Failed to fetch resource. The requested data is missing or inaccessible." });
        }
        return res.status(200).json(section_resources)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Failed to fetch resource. The requested data is missing or inaccessible." });
    }
}

const getResourceById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const resource_id = id?.toString().substring('resource_id='.length)
        const section_resources = await prisma.section_resource.findMany({
            where: {
                id: Number(resource_id)
            }
        })
        if (!section_resources) {
            return res.status(200).json({ message: "Failed to fetch resource. The requested data is missing or inaccessible." });
        }
        return res.status(200).json(section_resources)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Failed to fetch resource. The requested data is missing or inaccessible."});
    }
}

const deleteResourcesByIdSection = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const section_id=id?.toString().substring('section_id='.length)

        const resources_temp=await prisma.section_resource.findMany({
            where:{
                section_id:Number(section_id)
            }
        })
        resources_temp.map(async (resource)=>{
            await deleteFile(resource.url_resource)
        })

        const section_resources=await prisma.section_resource.deleteMany({
            where:{
                section_id:Number(section_id)
            }
        })
        if(section_resources.count==0){
            return res.status(200).json({message:'No hay datos por eliminar'})
        }
        return res.status(200).json({message:'Recursos eliminados',count:section_resources.count})
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al eliminar el recurso' })
    }
}

const deleteResourceById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const resource_id = id?.toString().substring('resource_id='.length)
        const resource_temp=await prisma.section_resource.findFirst({
            where:{
                id:Number(resource_id)
            }
        })
        await deleteFile(resource_temp?.url_resource||'')
        const section_resource = await prisma.section_resource.delete({
            where: {
                id: Number(resource_id)
            }
        })
        return res.status(200).json(section_resource)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al eliminar el recurso' })
    }
}