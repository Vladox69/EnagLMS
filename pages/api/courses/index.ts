import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/apis';
import { CourseModel } from '@/models';


type Data =
    | { message: string }
    | CourseModel[]
    | CourseModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getCourses(res);
        case 'POST':
            return createCourse(req, res)
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }
}


const getCourses = async (res: NextApiResponse<Data>) => {
    try {
        const courses = await prisma.course.findMany();
        return res.status(200).json(courses);
    } catch (error) {
        console.log('Failed to retrieve resource. The requested data is missing or inaccessible.', error);
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' })
    }
}


const createCourse = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {

        const { topic, content, start_at, end_at, modality, objective, periods, qualification, requirements, type, visible ,img_url,is_start} = req.body
        const course = await prisma.course.create({
            data: {
                topic,
                content,
                start_at,
                end_at,
                modality,
                objective,
                periods,
                qualification,
                requirements,
                type,
                visible,
                img_url,
                is_start
            }
        })
        return res.status(200).json(course)
    } catch (error) {
        console.log('Failed to create resource. The provided data is invalid or incomplete.',error);
        return res.status(400).json({ message: 'Failed to create resource. The provided data is invalid or incomplete.' })
    }
}