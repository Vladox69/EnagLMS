import { prisma } from '@/apis';
import { SectionResourceModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | SectionResourceModel[]
    | SectionResourceModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getResourcesByIdSection(req, res);
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getResourcesByIdSection = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const section_resources = await prisma.section_resource.findMany({
            where: {
                section_id: Number(id)
            }
        })
        if (!section_resources) {
            return res.status(200).json({ message: 'No hay recursos con ese ID de seccion:' + id });
        }
        return res.status(200).json(section_resources)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener los recursos' });
    }
}