import { prisma } from '@/apis';
import { ActivityResourceModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | ActivityResourceModel
    | ActivityResourceModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getResources(res)
        case 'POST':
            return createResource(req,res)
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getResources = async (res: NextApiResponse<Data>) => {
    try {
        const activity_resource = await prisma.activity_resource.findMany()
        return res.status(200).json(activity_resource)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener recursos' });
    }
}

const createResource = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { url_resource, activity_id, title } = req.body;
        const activity_resource=await prisma.activity_resource.create({
            data:{
                title,
                url_resource,
                activity_id
            }
        })
        return res.status(200).json(activity_resource)
    } catch (error) {

    }
}