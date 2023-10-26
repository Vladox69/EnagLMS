import { prisma } from "@/apis";
import { InscriptionModel } from "@/models/inscription";
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | InscriptionModel[]


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            const { id } = req.query;
            if (id?.includes('course_id=')) {
                return getIsncriptionByIdCourse(req, res);
            } else {
                return getInscription(req, res);
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}


const getInscription = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const inscriptions = await prisma.inscription.findMany({
            // where: {
            //     student_id: Number(id)
            // }
        })
        if (!inscriptions) {
            return res.status(200).json({
                message: 'No hay esa inscripricion con ese ID:' + id
            });
        }
        return res.status(200).json(inscriptions);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener inscripcion' })
    }
}

const getIsncriptionByIdCourse = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const course_id = id?.toString().substring('course_id='.length);
        const inscriptions = await prisma.inscription.findMany({
            where: {
                course_id: Number(course_id)
            }
        })

        if (!inscriptions) {
            return res.status(200).json({
                message: 'No hay esa inscripricion con ese ID de curso:' + course_id
            });
        }
        return res.status(200).json(inscriptions);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener inscripcion' })
    }
}