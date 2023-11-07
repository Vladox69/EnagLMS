import { prisma } from '@/apis';
import { SectionModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | SectionModel
    | SectionModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getSections( res);
        case 'POST':
            return createSection(req,res);
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getSections = async ( res: NextApiResponse<Data>) => {
    try {
        const sections = await prisma.section.findMany()
        return res.status(200).json(sections)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener secciones' });
    }
}


const createSection = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {module_id,title,content}=req.body;
        const section=await prisma.section.create({
            data:{
                title,
                content,
                module_id
            }
        })
        return res.status(200).json(section);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al crear seccion' }); 
    }
}