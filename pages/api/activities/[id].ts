import { prisma } from '@/apis';
import { ActivityModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | ActivityModel[]
    | ActivityModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query;
    switch (req.method) {
        case 'GET':
            if (id?.includes('activity_id=')) {
                return getActivityById(req, res);
            } else if(id?.includes('section_id=')){
                return getActivitiesByIdSection(req, res);
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getActivitiesByIdSection = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const section_id = id?.toString().substring("section_id=".length)
        const activities = await prisma.activity.findMany({
            where: {
                section_id: Number(section_id)
            }
        })
        if (!activities) {
            return res.status(200).json({ message: 'No hay actividaes con ese ID de seccion:' + section_id });
        }
        return res.status(200).json(activities)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener actividades' });
    }
}

const getActivityById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const activity_id = id?.toString().substring("activity_id=".length)
        const activity = await prisma.activity.findFirst({
            where: {
                id: Number(activity_id)
            }
        })
        if (!activity) {
            return res.status(200).json({ message: 'No hay actividaes con ese ID de seccion:' + activity_id });
        }
        return res.status(200).json(activity)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener actividades' });
    }
}