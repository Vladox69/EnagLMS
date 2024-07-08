import { prisma } from '@/apis';
import { ModuleModel } from '@/models';
import { deleteFile } from '@/utils/deleteFiles';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | ModuleModel[]
    | ModuleModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query
    switch (req.method) {
        case 'GET':
            if (id?.includes('course_id=')) {
                return getModulesByIdCourse(req, res);
            } else if (id?.includes('module_id=')) {
                return getModuleById(req, res)
            } else if (id?.includes('teacher_id=')){
                return getModulesByIdTeacher(req, res);
            }
        case 'PUT':
            if(id?.includes('module_id=')){
                return updateModule(req,res)
            }    
        case 'DELETE':
            if(id?.includes('module_id=')){
                return deleteModuleById(req,res)
            }        
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}

const getModulesByIdCourse = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    try {
        const { id } = req.query;
        const course_id = id?.toString().substring("course_id=".length)
        const modules = await prisma.module.findMany({
            where: {
                course_id: Number(course_id)
            }
        })
        if (!modules) {
            return res.status(200).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
        }
        return res.status(200).json(modules)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}


const getModulesByIdTeacher = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const teacher_id = id?.toString().substring("teacher_id=".length);
        const modules = await prisma.module.findMany({
            where: {
                teacher_id: Number(teacher_id)
            }
        })
        if (!modules) {
            return res.status(200).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
        }
        return res.status(200).json(modules)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}

const getModuleById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const module_id = id?.toString().substring("module_id=".length);
        const mod = await prisma.module.findFirst({
            where: {
                id: Number(module_id)
            }
        })
        if (!mod) {
            return res.status(200).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
        }
        return res.status(200).json(mod)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}

const updateModule = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
try {
    const {id}=req.query;
    const module_id=id?.toString().substring("module_id=".length)
    const {title,content,course_id,teacher_id,hours,img_url}=req.body
    const module_temp=await prisma.module.findFirst({
        where:{
            id:Number(module_id)
        }
    })
    if(module_temp?.img_url!=img_url){
        await deleteFile(module_temp?.img_url||'')
    }
    
    const mod=await prisma.module.update({
        where:{
            id:Number(module_id)
        },
        data:{
            title,
            content,
            course_id,
            teacher_id,
            hours,
            img_url
        }
    })
    return res.status(200).json(mod)
} catch (error) {
    console.log(error);
    return res.status(400).json({message:'Error al actualizar modulo'})
}
}

const deleteModuleById= async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const {id}=req.query
        const module_id=id?.toString().substring("module_id=".length)
        const mod=await prisma.module.delete({
            where:{
                id:Number(module_id)
            }
        })
        return res.status(200).json(mod)
    } catch (error) {
        console.log(error);
        return res.status(200).json({message:'No se pudo eliminar el módulo'})
    }
}