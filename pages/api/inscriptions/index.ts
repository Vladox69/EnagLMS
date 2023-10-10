import { InscriptionModel } from "@/models/inscription";
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/apis';

type Data =
    | { message: string }
    | InscriptionModel
    | InscriptionModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getInscriptions(res)
        case 'POST':
            return {}
        case 'PUT':
            return {}
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }
}

const getInscriptions=async(res:NextApiResponse<Data>)=>{
    try {
        const inscriptions=await prisma.inscription.findMany();
        return res.status(200).json(inscriptions)
    } catch (error) {
        console.log('Error al obtener las inscripciones',error);
        res.status(400).json({message:'Error interno del servidor'})
    }
}