import { prisma } from '@/apis';
import { ModuleModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | ModuleModel[]
    | ModuleModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getModulesByIdCourse(req, res);
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getModulesByIdCourse = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    try {
        const { id } = req.query;
        const modules = await prisma.module.findMany({
            where:{
                course_id:Number(id)
            }
        })
        if (!modules) {
            return res.status(200).json({ message: 'No hay modulos en ese curso'+id });
        }
        return res.status(200).json(modules)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener los modulos' });
    }
}