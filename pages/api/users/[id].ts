import { prisma } from "@/apis";
import { UserModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string; }
    | UserModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    // const {id}=req.query;

    switch (req.method) {
        case 'GET':
            return getUser(req,res) ;
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}


const getUser=async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {id}=req.query;

        const user=await prisma.user.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(!user){
            return res.status(200).json({message:'No hay usuario con ese ID:'+id})
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'Error al obtener usuario'})
    }
}