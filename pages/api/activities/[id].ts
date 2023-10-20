import { prisma } from '@/apis';
import { ActivityModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | ActivityModel[]
    | ActivityModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getActivitiesByIdSection(req, res);
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getActivitiesByIdSection = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const activity = await prisma.activity.findMany({
            where: {
                section_id: Number(id)
            }
        })
        if (!activity) {
            return res.status(200).json({ message: 'No hay actividaes con ese ID de seccion:' + id });
        }
        return res.status(200).json(activity)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener actividades' });
    }
}