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
            return getAsistancesByIdCourseStudent(req,res);
        default:
            return res.status(400).json({message:'Endpoint no existe'});

    }
}            


const getAsistancesByIdCourseStudent=async(req:NextApiRequest,res:NextApiResponse<Data>)=>{
    try {

        const { student, course } = req.query;
        const asistances=await prisma.asistance.findMany({
            where:{
                module_id:Number(course)
            }
        }) ;
        return res.status(200).json(asistances);
    } catch (error) {
        console.log('Error al obtener asistencias',error);
        return res.status(500).json({message:'Error interno del servidor'});
    }
}