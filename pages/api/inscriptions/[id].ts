import { prisma } from "@/apis";
import { InscriptionModel } from "@/models/inscription";
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | InscriptionModel[]


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getInscription(req, res);
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}


const getInscription = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const inscriptions=await prisma.inscription.findMany({
            where:{
                student_id:Number(id)
            }
        })
        if(!inscriptions){
            return res.status(200).json({
                message:'No hay el curso con ese ID:'+id
            });
        }
        return res.status(200).json(inscriptions);
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'Error al obtener inscripcion'})
    }
}