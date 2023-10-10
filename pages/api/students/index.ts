import { StudentModel } from "@/models";
import { prisma } from '@/apis';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data=
|{message:string}
|StudentModel[]
|StudentModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getStudents(res)
        case 'POST':
            return {}
        case 'PUT':
            return {}
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }
}

const getStudents=async(res:NextApiResponse<Data>)=>{
    try {
        const students=await prisma.student.findMany();
        return res.status(200).json(students)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error al recuperar estudiantes'});
    }
}