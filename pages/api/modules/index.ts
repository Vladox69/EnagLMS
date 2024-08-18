import { prisma } from '@/apis';
import { ModuleModel } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | ModuleModel[]
    | ModuleModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getModules( res);
        case 'POST':
            return createModule(req,res)
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}


const createModule=async(req: NextApiRequest, res: NextApiResponse<Data>)=>{
    try {
        const {title,content,course_id,teacher_id,hours,img_url,planif}=req.body
        const mod = await prisma.module.create({
            data:{
                title,
                content,
                course_id,
                teacher_id,
                hours,
                img_url,
                planif
            }
        })       
        return res.status(200).json(mod) 
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'Error al crear el módulo'})
    }
}

const getModules = async (res: NextApiResponse<Data>) => {
    try {
        const modules = await prisma.module.findMany()
        if (!modules) {
            return res.status(200).json({ message: 'No hay modulos'});
        }
        return res.status(200).json(modules)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener modulos' });
    }
}