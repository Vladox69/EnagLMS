
import { prisma } from '@/apis';
import { SubmissionModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data=
|{message:string}
|SubmissionModel
|SubmissionModel[]


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getSubmissions(res)
        case 'POST':
            return {}
        case 'PUT':
            return {}
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }
}

const getSubmissions=async(res:NextApiResponse<Data>)=>{
    try {
        const submissions = await prisma.submission.findMany();
        return res.status(200).json(submissions); 
    } catch (error) {
        console.log('Error al obtener los usuarios',error);
        res.status(500).json({message:'Error interno del servidor'});
    }
}


const putSubmission=async(req: NextApiRequest, res: NextApiResponse<Data>)=>{
    
}