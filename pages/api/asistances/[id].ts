import { prisma } from '@/apis';
import { AsistanceModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';


type Data =
    | { message: string }
    | AsistanceModel
    | AsistanceModel[]


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query;
    switch (req.method) {
        case 'GET':
            if (id?.includes('module_id=') && id?.includes('student_id=')) {
                return getAsistancesByIdCourseStudent(req, res);
            } else if (id?.includes('module_id=')) {
                return getAsistancesByIdModule(req, res);
            } else if (id?.includes('course_id=')) {
                return getAsistancesByIdCourse(req, res)
            } else {
                return getAsistancesById(req, res);
            }
        case 'PUT':
            return updateAsistance(req,res);
        case 'DELETE':
            return deleteAsistanceById(req, res);
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });

    }
}

const getAsistancesById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const asistance_id = id?.toString().substring('asistance_id='.length);
        const asistance = await prisma.asistance.findFirst({
            where: {
                id: Number(asistance_id)
            }
        })
        if (!asistance) {
            return res.status(200).json({
                message: 'No se encontro asistencia con ese ID +' + asistance_id
            })
        }
        return res.status(200).json(asistance)
    } catch (error) {
        console.log('Failed to retrieve resource. The requested data is missing or inaccessible.', error);
        return res.status(500).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}


const getAsistancesByIdCourseStudent = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const qp = id?.toString().split('&');

        const module_id = qp![1].substring('module_id='.length);

        const asistances = await prisma.asistance.findMany({
            where: {
                module_id: Number(module_id),
            }
        });
        return res.status(200).json(asistances);
    } catch (error) {
        console.log('Failed to retrieve resource. The requested data is missing or inaccessible.', error);
        return res.status(500).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}

const getAsistancesByIdModule = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const module_id = id?.toString().substring('module_id='.length);
        const asistances = await prisma.asistance.findMany({
            where: {
                module_id: Number(module_id)
            }
        })
        return res.status(200).json(asistances);
    } catch (error) {
        console.log('Failed to retrieve resource. The requested data is missing or inaccessible.', error);
        return res.status(500).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}

const getAsistancesByIdCourse = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const course_id = id?.toString().substring('course_id='.length);
        const modules = await prisma.module.findMany({
            where: {
              course_id: Number(course_id),
            },
        });
        const module_ids = modules.map((module) => module.id); 
        const asistances = await prisma.asistance.findMany({
            where: {
                module_id: {
                    in:module_ids
                }
            }
        })
        return res.status(200).json(asistances);
    } catch (error) {
        console.log('Failed to retrieve resource. The requested data is missing or inaccessible.', error);
        return res.status(500).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}

const updateAsistance=async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {id}=req.query;
        const {date,description} =req.body;
        
        const asistance_id=id?.toString().substring('asistance_id='.length);

        const asistance=await prisma.asistance.update({
            where:{
                id:Number(asistance_id)
            },
            data:{
                date,
                description
            }
        })

        if(!asistance){
            return res.status(200).json({message:'No existe ningún registo para actualizar'})
        }
        return res.status(200).json(asistance)
    } catch (error) {
        return res.status(400).json({message:'Error al actualizar registro'})        
    }
}

const deleteAsistanceById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query
        const asistance_id = id?.toString().substring('asistance_id='.length)
        const asistance_del = await prisma.asistance.delete({
            where: {
                id: Number(asistance_id)
            }
        })
        return res.status(200).json(asistance_del);
    } catch (error) {
        console.log('Failed to retrieve resource. The requested data is missing or inaccessible.', error);
        return res.status(500).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}