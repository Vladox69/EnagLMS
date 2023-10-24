import { prisma } from '@/apis';
import { TeacherModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | TeacherModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getTeacher(req, res);
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getTeacher = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const teacher = await prisma.teacher.findFirst({
            where: {
                id: Number(id)
            }
        })
        if (!teacher) {
            return res.status(200).json({ message: 'No hay entrega con ese ID:' + id });
        }
        return res.status(200).json(teacher)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}