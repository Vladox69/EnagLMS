
import { prisma } from '@/apis';
import { UserModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data=
|{message:string}
|UserModel
|UserModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getUsers(res)
        case 'POST':
            return {}
        case 'PUT':
            return {}
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }
}

const getUsers=async(res:NextApiResponse<Data>)=>{
    try {
        const users=await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        console.log('Error al obtener los usuarios',error);
        res.status(500).json({message:'Error interno del servidor'});
    }
}