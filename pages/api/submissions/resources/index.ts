import { prisma } from '@/apis';
import { SubmissionResourceModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | SubmissionResourceModel
    | SubmissionResourceModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getSubmissionsResource(res);
        case 'POST':
            return createSubmissionResource(req, res);
        case 'PUT':
            return updateSubmission(req, res);
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getSubmissionsResource = async (res: NextApiResponse<Data>) => {
    try {
        const submissios_resource = await prisma.submission_resource.findMany();
        return res.status(200).json(submissios_resource)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}

const createSubmissionResource = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const  {url_resource,submission_id,title}  = req.body;
        
        const submissios_resource = await prisma.submission_resource.create({
            data:{
                url_resource,
                title,
                submission_id:Number(submission_id)
            }
        });
        return res.status(200).json(submissios_resource);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Failed to update resource. The target data is missing or cannot be accessed."});
    }
}


const updateSubmission = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { resource } = req.body;
        const submissios_resource = await prisma.submission_resource.update(resource);
        return res.status(200).json(submissios_resource);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}