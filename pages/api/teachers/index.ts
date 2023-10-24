import { prisma } from '@/apis';
import { TeacherModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | TeacherModel
    | TeacherModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getTeachers( res);
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getTeachers = async ( res: NextApiResponse<Data>) => {
    try {
        const teachers = await prisma.teacher.findMany()
        if (!teachers) {
            return res.status(200).json({ message: 'No hay profesrores' });
        }
        return res.status(200).json(teachers)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}