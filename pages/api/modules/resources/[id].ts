import { prisma } from '@/apis';
import { ModuleResourceModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | ModuleResourceModel
    | ModuleResourceModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query
    switch (req.method) {
        case 'GET':
            if (id?.includes('resource_id=')) {
                return getResourceById(req, res);
            }else if(id?.includes('module_id=')){
                return getResourcesByIdModule(req,res)
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}


const getResourcesByIdModule = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const module_id=id?.toString().substring('module_id='.length)
        const module_resource = await prisma.module_resource.findMany({
            where: {
                module_id: Number(module_id)
            }
        })
        if (!module_resource) {
            return res.status(200).json({ message: 'No hay entregas con ese ID de modulo:' + id });
        }
        return res.status(200).json(module_resource)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}


const getResourceById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const resource_id=id?.toString().substring('resource_id='.length)
        const module_resource = await prisma.module_resource.findFirst({
            where: {
                id: Number(resource_id)
            }
        })
        if (!module_resource) {
            return res.status(200).json({ message: 'No hay entrega con ese ID:' + id });
        }
        return res.status(200).json(module_resource)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}