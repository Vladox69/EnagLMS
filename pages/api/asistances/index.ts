import { prisma } from '@/apis';
import { AsistanceModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';


type Data =
    | { message: string }
    | AsistanceModel
    | AsistanceModel[]


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { student, course } = req.query;
    switch (req.method) {
        case 'GET':
            return getAsistances(res);
        case 'POST':
            return createAsistance(req, res);

        case 'DELETE':
            return
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });

    }
}


const getAsistances = async (res: NextApiResponse<Data>) => {
    try {
        const asistances = await prisma.asistance.findMany();
        return res.status(200).json(asistances);
    } catch (error) {
        console.log('Error al obtener asistencias', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

const getAsistancesByIdCourseStudent = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { student, course } = req.query;
        const asistances = await prisma.asistance.findMany({
            where: {
                module_id: Number(course),
            }
        });
        return res.status(200).json(asistances);
    } catch (error) {
        console.log('Error al obtener asistencias', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

const createAsistance = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { date, description, module_id } = req.body;
        const asistance = await prisma.asistance.create({
            data: {
                date,
                description,
                module_id
            }
        })
        return res.status(200).json(asistance)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'No se puede crear la asistencia' })
    }
}
