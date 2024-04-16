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
            return getActivity(res);
        case 'POST':
            return createActivity(req, res)
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getActivity = async (res: NextApiResponse<Data>) => {
    try {
        const activities = await prisma.activity.findMany();
        return res.status(200).json(activities)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}

const createActivity = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { title, content, time_due, section_id, ponderation } = req.body
        const activity = await prisma.activity.create(
            {
                data: {
                    title,
                    content,
                    time_due,
                    section_id,
                    ponderation
                }
            }
        )
        return res.status(200).json(activity)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'No se pudo crear la asistencia' })

    }
}