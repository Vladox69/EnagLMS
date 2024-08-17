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
            return res.status(200).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
        }
        return res.status(200).json(teachers)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}

const createTeacher = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {cv_url,third_level_degree,user_id } = req.body
        const teacher= await prisma.teacher.create({
            data:{
                cv_url,
                third_level_degree,
                user_id,
            }
        })
        return res.status(200).json(teacher)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"Failed to create resource. The provided data is invalid or incomplete."})
    }
}