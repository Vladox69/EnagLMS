import { prisma } from "@/apis";
import { StudentModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | StudentModel


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            const { id } = req.query;
            if (id?.includes('student_id=')) {
                return getStudentById(req, res);
            }else{
                return getStudentByIdUser(req,res);
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getStudentById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const student_id= id?.toString().substring('student_id='.length);
        const student = await prisma.student.findFirst({
            where: {
                id: Number(student_id)
            }
        })
        if (!student) {
            return res.status(200).json({ message: 'No hay estudiante con ese ID:' + id })
        }
        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener estudiante' })
    }
}

const getStudentByIdUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const user_id= id?.toString().substring('user_id='.length);
        const student = await prisma.student.findFirst({
            where: {
                user_id: Number(user_id)
            }
        })
        if (!student) {
            return res.status(200).json({ message: 'No hay estudiante con ese ID:' + id })
        }
        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener estudiante' })
    }
}