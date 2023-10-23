import { prisma } from '@/apis';
import { AsistanceModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';


type Data =
    | { message: string }
    | AsistanceModel
    | AsistanceModel[]


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            const { id } = req.query;
            if (id?.includes('module_id=') && id?.includes('student_id=')) {
                return getAsistancesByIdCourseStudent(req, res);
            }
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });

    }
}


const getAsistancesByIdCourseStudent = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {id}=req.query;
        const qp=id?.toString().split('&');

        const student_id=qp![0].substring('student_id='.length);        
        const module_id=qp![1].substring('module_id='.length);
        
        const asistances = await prisma.asistance.findMany({
            where: {
                module_id: Number(module_id),
                student_id:Number(student_id)
            }
        });
        return res.status(200).json(asistances);
    } catch (error) {
        console.log('Error al obtener asistencias', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}