import { prisma } from "@/apis";
import { StudentModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from 'next';

type Data=
|{message:string}
|StudentModel


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getStudent(req,res) ;
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getStudent=async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {id}=req.query;
        const student=await prisma.student.findFirst({
            where:{
                id:Number(id)
            }
        })        
        if(!student){
            return res.status(200).json({message:'No hay estudiante con ese ID:'+id})
        }
        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'Error al obtener estudiante'})
    }
}