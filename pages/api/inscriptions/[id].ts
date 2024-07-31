import { prisma } from "@/apis";
import { InscriptionModel } from "@/models/inscription";
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | InscriptionModel[]
    | InscriptionModel


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query;
    switch (req.method) {
        case 'GET':
            if (id?.includes('course_id=')) {
                return getIsncriptionByIdCourse(req, res);
            } else if (id?.includes('student_id=')) {
                return getIsncriptionsByIdStudent(req, res)
            } else {
                return getInscription(req, res);
            }
        case 'DELETE':
            if (id?.includes('inscription_id=')) {
                return deleteInscriptionById(req, res);
            }else if(id?.includes('course_id=')){
                return deleteInscriptionByIdCourse(req, res);
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}


const getInscription = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const inscriptions = await prisma.inscription.findMany()
        if (!inscriptions) {
            return res.status(200).json({
                message: 'Failed to retrieve resource. The requested data is missing or inaccessible.'
            });
        }
        return res.status(200).json(inscriptions);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' })
    }
}

const getIsncriptionByIdCourse = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const course_id = id?.toString().substring('course_id='.length);
        const inscriptions = await prisma.inscription.findMany({
            where: {
                course_id: Number(course_id)
            }
        })

        if (!inscriptions) {
            return res.status(200).json({
                message: 'Failed to retrieve resource. The requested data is missing or inaccessible.'
            });
        }
        return res.status(200).json(inscriptions);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' })
    }
}

const getIsncriptionsByIdStudent = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const student_id = id?.toString().substring('student_id='.length);
        const inscriptions = await prisma.inscription.findMany({
            where: {
                student_id: Number(student_id)
            }
        })

        if (!inscriptions) {
            return res.status(200).json({
                message: 'No hay esa inscripricion con ese ID de curso:' + student_id
            });
        }
        return res.status(200).json(inscriptions);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener inscripcion' })
    }
}

const deleteInscriptionById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const inscription_id = id?.toString().substring('inscription_id='.length)
        const inscription = await prisma.inscription.delete({
            where: {
                id: Number(inscription_id)
            }
        })
        return res.status(200).json(inscription)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al eliminar' })
    }
}

const deleteInscriptionByIdCourse= async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const course_id = id?.toString().substring('course_id='.length)
        const inscription = await prisma.inscription.deleteMany({
            where: {
                course_id: Number(course_id)
            }
        })
        if(inscription.count>0){
            return res.status(200).json({message:`Rows deleted ${inscription.count}`})
        }
        return res.status(204).json({message:'No content to delete'})
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al eliminar' })
    }
}