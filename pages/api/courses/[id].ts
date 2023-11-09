import { prisma } from "@/apis";
import { CourseModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | CourseModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query
    switch (req.method) {
        case 'GET':
            if (id?.includes('course_id=')) {
                return getCourseById(req, res);
            }
        default:
            res.status(200).json({ message: 'Example' });
    }
}


const getCourseById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const course_id=id?.toString().substring('course_id='.length)
        const course = await prisma.course.findFirst({
            where: {
                id: Number(course_id)
            }
        })
        if (!course) {
            return res.status(200).json({
                message: 'No existe ese curso con ID:' + id
            })
        }
        return res.status(200).json(course);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: 'Error al obtener el curso'
        })
    }
}  