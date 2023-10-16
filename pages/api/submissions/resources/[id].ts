import { prisma } from '@/apis';
import { SubmissionResourceModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | SubmissionResourceModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getResourceBySubmissionId(req, res);
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

// const getResourceById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
//     try {
//         const { id } = req.query;
//         const submission_resource = await prisma.submission_resource.findFirst({
//             where: {
//                 id: Number(id)
//             }
//         })
//         if (!submission_resource) {
//             return res.status(200).json({ message: 'No hay entrega con ese ID:' + id });
//         }
//         return res.status(200).json(submission_resource)
//     } catch (error) {
//         console.log(error);
//         return res.status(400).json({ message: 'Error al obtener entrega' });
//     }
// }

const getResourceBySubmissionId= async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const submission_resource = await prisma.submission_resource.findMany({
            where: {
                submission_id:Number(id)
            }
        })
        if (!submission_resource) {
            return res.status(200).json({ message: 'No hay entrega con ese ID:' + id });
        }
        return res.status(200).json(submission_resource)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}