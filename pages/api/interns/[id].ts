import { prisma } from '@/apis';
import { InternModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | InternModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query
    switch (req.method) {
        case 'GET':
            if (id?.includes('intern_id=')) {
                return getInternById(req, res);
            }
        case 'DELETE':
            if (id?.includes('intern_id=')) {
                return deleteIntern(req, res)
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getInternById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const intern_id = id?.toString().substring('intern_id='.length)
        const intern_cv = await prisma.intern_cv.findFirst({
            where: {
                id: Number(intern_id)
            }
        })
        if (!intern_cv) {
            return res.status(200).json({ message: 'No hay entrega con ese ID:' + id });
        }
        return res.status(200).json(intern_cv)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}

const deleteIntern = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query
        const intern_id = id?.toString().substring('intern_id='.length)
        const intern_cv = await prisma.intern_cv.delete({
            where: {
                id: Number(intern_id)
            }
        })
        return res.status(200).json(intern_cv)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al eliminar la hoja de vida' })
    }
}