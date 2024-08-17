import { StudentModel } from "@/models";
import { prisma } from '@/apis';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | StudentModel[]
    | StudentModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getStudents(res)
        case 'POST':
            return createStudent(req,res)
        case 'PUT':
            return {}
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }
}

const getStudents = async (res: NextApiResponse<Data>) => {
    try {
        const students = await prisma.student.findMany();
        return res.status(200).json(students)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message:  'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}

const createStudent = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {  study_certificate_url, user_id } = req.body
        const student = await prisma.student.create({
           data:{
            study_certificate_url, 
            user_id, 
           } 
        })
        return res.status(200).json(student)
    } catch (error) {
        console.log("Failed to create resource. The provided data is invalid or incomplete.",error);
        return res.status(400).json({ message: "Failed to create resource. The provided data is invalid or incomplete." })
    }

}