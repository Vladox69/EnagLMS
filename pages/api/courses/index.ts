import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/apis';
import { CourseModel } from '@/models';


type Data=
|{message:string}
|CourseModel[]
|CourseModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getCourses(res);
        default:
            return res.status(400).json({message:'Endpoint no existe'});
    }
}


const getCourses=async(res:NextApiResponse<Data>)=>{
    try {
        const courses=await prisma.course.findMany();
        return res.status(200).json(courses);
    } catch (error) {
        console.log(`Error al obtener cursos`,error);
        return res.status(400).json({message:'Error interno del servidor'})
    }
}