import { prisma } from '@/apis';
import { InternModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | InternModel
    | InternModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getInterns(res);
        case 'POST':
            return createInternCV(req, res)
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getInterns = async (res: NextApiResponse<Data>) => {
    try {
        const interns_cv = await prisma.intern_cv.findMany()
        if (!interns_cv) {
            return res.status(200).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.'});
        }
        return res.status(200).json(interns_cv)
    } catch (error) {
        console.log('Failed to retrieve resource. The requested data is missing or inaccessible.',error);
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}

const createInternCV = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { name, phone, email, cv_url ,date} = req.body
        const intern_cv = await prisma.intern_cv.create({
            data: {
                name,
                phone,
                email,
                cv_url,
                date
            }
        })

        return res.status(200).json(intern_cv)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Failed to create resource. The provided data is invalid or incomplete.' })
    }


}
