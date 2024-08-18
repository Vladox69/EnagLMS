
import { prisma } from '@/apis';
import { SubmissionModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | SubmissionModel
    | SubmissionModel[]


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getSubmissions(res)
        case 'POST':
            return createSubmission(req,res)
        case 'PUT':
            return {}
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }
}

const getSubmissions = async (res: NextApiResponse<Data>) => {
    try {
        const submissions = await prisma.submission.findMany();
        return res.status(200).json(submissions);
    } catch (error) {
        console.log('Error al obtener los usuarios', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}


const createSubmission = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    try {
        const { grade, comment, student_id, activity_id, state_gra, state_sub,date } = req.body
        console.log(req.body);
        const submission=await prisma.submission.create({
            data:{
                grade,
                comment,
                student_id,
                state_gra,
                state_sub,
                activity_id,
                date
            }
        })
        return res.status(200).json(submission)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'Error al crear las entregas'})
        
    }

}