import { prisma } from '@/apis';
import { AsistanceRegisterModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | AsistanceRegisterModel
    | AsistanceRegisterModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            const { id } = req.query;
            if (id?.includes('asistance_id=')) {
                return getAsistanceRegisterByIdAsistance(req, res);
            }
        case 'PUT':
            return updateAsistanceRegister(req, res);
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getAsistanceRegisterByIdAsistance = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const asistance_id=id?.toString().substring('asistance_id='.length);

        const asistance_registers = await prisma.asistance_register.findMany({
            where: {
                asistance_id:Number(asistance_id)
            }
        })
        if (!asistance_registers) {
            return res.status(200).json({ message: 'No hay entrega con ese ID:' + id });
        }
        return res.status(200).json(asistance_registers)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}

const updateAsistanceRegister = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const {status}=req.body;
        const register_id=id?.toString().substring('register_id='.length);
        const asistance_register=await prisma.asistance_register.update({
            where:{
                id:Number(register_id)
            },
            data:{
                status
            }
        })
        if(!asistance_register){
            return res.status(200).json({message:'No existe ningun registro para actualizar'})
        }
        return res.status(200).json(asistance_register);
    } catch (error) {
        return res.status(400).json({ message: 'Error actualizar el registro' });
    }
}