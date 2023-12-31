
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
            return createUser(req,res)
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
        console.log('Failed to retrieve resource. The requested data is missing or inaccessible.',error);
        res.status(500).json({message:'Failed to retrieve resource. The requested data is missing or inaccessible.'});
    }
}

const createUser=async(req: NextApiRequest, res: NextApiResponse<Data>)=>{
    try {
        
        const {username,password,email,rol,photo_url}=req.body
        const user=await prisma.user.create({
            data:{
                username,
                password,
                email,
                rol,
                photo_url
            }
        })
        return res.status(200).json(user)
    } catch (error) {
        console.log("Failed to create resource. The provided data is invalid or incomplete.",error);
        return res.status(400).json({message:"Failed to create resource. The provided data is invalid or incomplete."})
    }
}