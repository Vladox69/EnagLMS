import { prisma } from '@/apis';
import { AsistanceRegisterModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | AsistanceRegisterModel[]
    | AsistanceRegisterModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getAsistanceRegisters(res);
        case 'POST':
            return createAsistanceRegister(req,res);
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getAsistanceRegisters = async (res: NextApiResponse<Data>) => {
    try {
        const asistance_registers = await prisma.asistance_register.findMany();
        if (!asistance_registers) {
            return res.status(200).json({ message: 'No hay registros' });
        }
        return res.status(200).json(asistance_registers)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}

const createAsistanceRegister=async (req: NextApiRequest,res: NextApiResponse<Data>) => {
    try {
        const {status,student_id,asistance_id}=req.body;
        const asistance_register=await prisma.asistance_register.create({
            data:{
                status,
                student_id,
                asistance_id
            }
        })
        return res.status(200).json(asistance_register);
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'Error al crear el registro'})
    }
}