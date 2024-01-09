import { prisma } from '@/apis';
import { ActivityResourceModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | { message: string, count: number }
    | ActivityResourceModel
    | ActivityResourceModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query
    switch (req.method) {
        case 'GET':
            if (id?.includes('activity_id=')) {
                return getResourceByIdActivity(req,res)
            } else if (id?.includes('resource_id=')) {
                return getResourceById(req, res);
            }
        case 'DELETE':
            if(id?.includes('activity_id=')){
                return deleteResourceByIdActivty(req,res)
            }else if(id?.includes('resource_id=')){ 
                return deleteResourceById(req,res)
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getResourceByIdActivity = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query
        const activity_id = id?.toString().substring('activity_id='.length)
        const activity_resources = await prisma.activity_resource.findMany({
            where: {
                activity_id: Number(activity_id)
            }
        })
        if(!activity_resources){
            return res.status(200).json({message:"Failed to fetch resource. The requested data is missing or inaccessible."})
        }
        return res.status(200).json(activity_resources);
            } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Failed to fetch resource. The requested data is missing or inaccessible." });
    }
}

const getResourceById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const resource_id = id?.toString().substring('resource_id='.length)
        const activity_resource = await prisma.activity_resource.findFirst({
            where: {
                id: Number(resource_id)
            }
        })
        if (!activity_resource) {
            return res.status(200).json({ message: 'No hay entrega con ese ID:' + id });
        }
        return res.status(200).json(activity_resource)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}

const deleteResourceByIdActivty = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {id}=req.query
        const activity_id=id?.toString().substring('activity_id='.length)
        const activity_resources = await prisma.activity_resource.deleteMany({
            where: {
                activity_id: Number(activity_id)
            }
        })
        if (activity_resources.count) {
            return res.status(200).json({ message: 'No hay recursos por eliminar' })
        }
        return res.status(200).json({ message: 'Recursos eliminados', count: activity_resources.count })

    }catch(error){
        console.log(error);
        return res.status(400).json({message:'Error al eliminar el recurso'})
    }
}
const deleteResourceById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {id}=req.query
        const resource_id=id?.toString().substring('resource_id='.length)
        const activity_resource=await prisma.activity_resource.delete({
            where:{
                id:Number(resource_id)
            }
        })
        return res.status(200).json(activity_resource)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'Error al eliminar el recurso'})
    }
}