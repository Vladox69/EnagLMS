import { prisma } from "@/apis";
import { SubmissionModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from 'next';

type Data=
|{message:string}
|SubmissionModel


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getSubmission(req,res) ;
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getSubmission=async(req: NextApiRequest, res: NextApiResponse<Data>)=>{
    try {
        const {id}=req.query;
        const submission=await prisma.submission.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(!submission){
            return res.status(200).json({message:'No hay entrega con ese ID:'+id});
        }
        return res.status(200).json(submission)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'Error al obtener entrega'});
    }
}