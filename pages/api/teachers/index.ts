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
        case 'POST':
            return createTeacher(req,res);
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

const createTeacher = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {ID_card_url,cv_url,third_level_degree,user_id,names,last_names } = req.body
        const teacher= await prisma.teacher.create({
            data:{
                ID_card_url,
                cv_url,
                third_level_degree,
                user_id,
                names,
                last_names
            }
        })
        return res.status(200).json(teacher)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'Error al crear profesor'})
    }
}