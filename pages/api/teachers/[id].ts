import { prisma } from '@/apis';
import { TeacherModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | TeacherModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const {id}=req.query
    switch (req.method) {
        case 'GET':
            if(id?.includes('teacher_id=')){
                return getTeacherById(req, res);
            }    

        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}


const getTeacherById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        console.log('Aca esta el query');
        
        console.log(req.query);
        const teacher_id= id?.toString().substring('teacher_id='.length)
        const teacher = await prisma.teacher.findFirst({
            where: {
                id: Number(teacher_id)
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