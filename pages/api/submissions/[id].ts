import { prisma } from "@/apis";
import { SubmissionModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | SubmissionModel
    | SubmissionModel[]


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            const { id } = req.query;
            if (id?.includes('student_id=') && id?.includes('activity_id=')) {
                return getSubmissionByIdActivityAndStudent(req, res);
            }else{
                return getSubmissionById(req, res)
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getSubmissionByIdActivityAndStudent = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {id}= req.query;
        const qp=id?.toString().split('&');

        const student_id=qp![0].toString().substring("student_id=".length)
        const activity_id=qp![1].toString().substring("activity_id=".length)

        const submission = await prisma.submission.findFirst({
            where:{
                acticity_id:Number(activity_id),
                student_id:Number(student_id)
            }
        })
        if (!submission) {
            return res.status(200).json({ message: 'No hay entrega con ese ID:' + `student:${student_id} y activity:${activity_id}` });
        }
        return res.status(200).json(submission)
    } catch (error) {

        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}

const getSubmissionById=async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {id}= req.query;

        const submission_id=id?.toString().substring("submission_id=".length)

        const submission = await prisma.submission.findFirst({
            where:{
                id:Number(submission_id)
            }
        })
        if (!submission) {
            return res.status(200).json({ message: 'No hay entrega con ese ID:' + `${submission_id} ` });
        }
        return res.status(200).json(submission)
    } catch (error) {

        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}