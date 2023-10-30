import { prisma } from '@/apis';
import { SectionModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | SectionModel[]
    | SectionModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query;
    switch (req.method) {
        case 'GET':
            if (id?.includes('module_id=')) {
                return getSectionsByIdModule(req, res);

            } else {
                return getSectionById(req, res);
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getSectionsByIdModule = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const module_id=id?.toString().substring('module_id='.length)
        const section = await prisma.section.findMany({
            where: {
                module_id: Number(module_id)
            }
        })
        if (!section) {
            return res.status(200).json({ message: 'No hay secciones con ese ID de modulo:' + id });
        }
        return res.status(200).json(section)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener secciones' });
    }
}

const getSectionById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const section_id=id?.toString().substring('section_id='.length)
        const section = await prisma.section.findFirst({
            where: {
                id: Number(section_id)
            }
        })
        if (!section) {
            return res.status(200).json({ message: 'No hay secciones con ese ID de modulo:' + id });
        }
        return res.status(200).json(section)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener secciones' });
    }
}