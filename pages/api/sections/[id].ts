import { enagApi, prisma } from '@/apis';
import { SectionModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | SectionModel[]
    | SectionModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query;
    switch (req.method) {
        case 'GET':
            if (id?.includes('module_id=')) {
                return getSectionsByIdModule(req, res);
            } else {
                return getSectionById(req, res);
            }
        case 'PUT':
            return updateSection(req,res);
        case 'DELETE':
            return deleteSectionById(req,res)
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getSectionsByIdModule = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const module_id=id?.toString().substring('module_id='.length)
        const section = await prisma.section.findMany({
            where: {
                module_id: Number(module_id)
            }
        })
        if (!section) {
            return res.status(200).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
        }
        return res.status(200).json(section)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}

const getSectionById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const section_id=id?.toString().substring('section_id='.length)
        const section = await prisma.section.findFirst({
            where: {
                id: Number(section_id)
            }
        })
        if (!section) {
            return res.status(200).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
        }
        return res.status(200).json(section)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}

const updateSection = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {id}=req.query;
        const {title,content}=req.body;

        const section_id=id?.toString().substring('section_id='.length)
        const section=await prisma.section.update({
            where:{
                id:Number(section_id)
            },
            data:{
                title,
                content
            }
        })
        if(!section){
            return res.status(401).json({message:'No existe sección con el id para actualizar'+section_id})
        }
        return res.status(200).json(section);
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'No se pudo actualizar'})
    }
}

const deleteSectionById= async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {id}=req.query
        const section_id=id?.toString().substring("section_id=".length)
        // await enagApi.delete(`/sections/resources/section_id=${section_id}`)
        // await enagApi.delete(`/activities/section_id=${section_id}`)
        const section=await prisma.section.delete({
            where:{
                id:Number(section_id)
            }
        })
        return res.status(200).json(section)
    } catch (error) {
        console.log(error);
        return res.status(200).json({message:'No se pudo eliminar el módulo'})
    }
}

const deleteSectionByIdModule= async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {id}=req.query
        const section_id=id?.toString().substring("section_id=".length)
        await enagApi.delete(`/sections/resources/section_id=${section_id}`)
        await enagApi.delete(`/activities/section_id=${section_id}`)
        const sections_deleted=await prisma.section.deleteMany({
            where:{
                id:Number(section_id)
            }
        })
        if(sections_deleted.count>0){
            return res.status(200).json({message:`Rows deleted ${sections_deleted}`}) 
        }
        return res.status(204).json({message:`No content to delete`})
    } catch (error) {
        console.log(error);
        return res.status(200).json({message:'No se pudo eliminar el módulo'})
    }
}