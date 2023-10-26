import { prisma } from '@/apis';
import { AsistanceRegisterModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | AsistanceRegisterModel
    | AsistanceRegisterModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            const { id } = req.query;
            if (id?.includes('asistance_id=')) {
                return getAsistanceRegister(req, res);
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getAsistanceRegister = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const asistance_id=id?.toString().substring('asistance_id='.length);

        const asistance_registers = await prisma.asistance_register.findMany({
            where: {
                asistance_id:Number(asistance_id)
            }
        })
        if (!asistance_registers) {
            return res.status(200).json({ message: 'No hay entrega con ese ID:' + id });
        }
        return res.status(200).json(asistance_registers)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}