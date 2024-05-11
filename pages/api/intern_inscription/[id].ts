import { prisma } from "@/apis";
import { InternInscriptionModel } from "@/models";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {message:string} | InternInscriptionModel | InternInscriptionModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query;
    switch (req.method) {
        case 'GET':
            if (id?.includes('course_id=')) {
                return getInternInscriptionByIdCourse(req, res);
            } else if (id?.includes('student_id=')) {
                return getInternInscriptionsByIdStudent(req, res)
            } else {
                return getInternInscription(req, res);
            }
        case 'DELETE':
            if (id?.includes('inscription_id=')) {
                return deleteInternInscriptionById(req, res);
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getInternInscription= async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const intern_inscriptions = await prisma.intern_inscription.findMany()
        if(!intern_inscriptions){
            return res.status(200).json({
                message: 'Failed to retrieve resource. The requested data is missing or inaccessible.'
            });
        }
        return res.status(200).json(intern_inscriptions)
    } catch (error) {
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' })
    }
}

const getInternInscriptionByIdCourse= async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const course_id = id?.toString().substring('course_id='.length);
        const intern_inscriptions=await prisma.intern_inscription.findMany({
            where:{
                course_id:Number(course_id)
            }
        })
        if(!intern_inscriptions){
            return res.status(200).json({
                message: 'Failed to retrieve resource. The requested data is missing or inaccessible.'
            });
        }
        return res.status(200).json(intern_inscriptions)
    } catch (error) {
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' })
    }
}

const getInternInscriptionsByIdStudent= async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const student_id = id?.toString().substring('student_id='.length);
        const intern_inscriptions=await prisma.intern_inscription.findMany({
            where:{
                student_id:Number(student_id)
            }
        })
        if(!intern_inscriptions){
            return res.status(200).json({
                message: 'Failed to retrieve resource. The requested data is missing or inaccessible.'
            });
        }
        return res.status(200).json(intern_inscriptions)
    } catch (error) {
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' })
    }
}

const deleteInternInscriptionById= async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const inscription_id = id?.toString().substring('inscription_id='.length)
        const inscription = await prisma.intern_inscription.delete({
            where:{
                id:Number(inscription_id)
            }
        })
        return res.status(200).json(inscription)
    } catch (error) {
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' })
    }
}