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
        console.log('Error al obtener asistencias', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
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
        console.log('Error al obtener asistencias', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
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
        console.log('Error al obtener asistencias', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
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
        console.log('Error al obtener asistencias', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}