import { prisma } from "@/apis";
import { UserModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string; }
    | UserModel
    | UserModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query;
    switch (req.method) {
        case 'GET':
            if (id?.includes('user_rol=')) {
                return getUserByRol(req, res)
            } else if (id?.includes('user_id=')) {
                return getUserById(req, res);
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}


const getUserByRol = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const rol:any = id?.toString().substring('user_rol='.length)
        const users = await prisma.user.findMany({
            where: {
                rol: rol
            }
        })
        if (!users) {
            return res.status(200).json({ message: 'No hay usuario con ese ID:' + id })
        }
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({ message: 'Error al obtener usuario' })
    }
}

const getUserById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const user_id = id?.toString().substring('user_id='.length)
        const user = await prisma.user.findFirst({
            where: {
                id: Number(user_id)
            }
        })
        if (!user) {
            return res.status(200).json({ message: 'No hay usuario con ese ID:' + id })
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener usuario' })
    }
}