import { prisma } from '@/apis';
import { TeacherModel } from '@/models';
import { deleteFile } from '@/utils/deleteFiles';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
    | { message: string }
    | TeacherModel

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const {id}=req.query
    switch (req.method) {
        case 'GET':
            if(id?.includes('teacher_id=')){
                return getTeacherById(req, res);
            }else if(id?.includes('user_id=')){
                return getTeacherByIdUser(req,res)
            }    
        case 'PUT':
            if(id?.includes('teacher_id=')){
                return updateTeacher(req, res);
            }
        case 'DELETE':
            if(id?.includes('teacher_id=')){
                return deleteTeacher(req, res);
            }
        default:
            break;
    }
    res.status(200).json({ message: 'Example' })
}


const getTeacherById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const teacher_id= id?.toString().substring('teacher_id='.length)
        const teacher = await prisma.teacher.findFirst({
            where: {
                id: Number(teacher_id)
            }
        })
        if (!teacher) {
            return res.status(200).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.'});
        }
        return res.status(200).json(teacher)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
    }
}

const getTeacherByIdUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { id } = req.query;
        const user_id= id?.toString().substring('user_id='.length)
        const teacher = await prisma.teacher.findFirst({
            where: {
                user_id: Number(user_id)
            }
        })
        if (teacher==null) {
            return res.status(200).json({ message: 'No hay entrega con ese ID:' + id });
        }
        return res.status(200).json(teacher)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al obtener entrega' });
    }
}

const updateTeacher=async (req: NextApiRequest, res: NextApiResponse<Data>)=>{
    try {
        const { id } = req.query;
        const teacher_id= id?.toString().substring('teacher_id='.length)
        const {cv_url,third_level_degree,user_id}=req.body
        const teacher_temp = await prisma.teacher.findFirst({
            where: {
              id: Number(teacher_id),
            },
          });
        if (teacher_temp?.cv_url != cv_url) {
            await deleteFile(teacher_temp?.cv_url || "");
        }
        if(teacher_temp?.third_level_degree!=third_level_degree){
            await deleteFile(teacher_temp?.third_level_degree || "");
        }
        const teacher= await prisma.teacher.update({
            where:{
                id:Number(teacher_id)
            },
            data:{
                cv_url,
                third_level_degree,
                user_id,
            }
        }) 
        return res.status(200).json(teacher)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'No se pudo actualizar el profesror'})
    }
}

const deleteTeacher=async (req: NextApiRequest, res: NextApiResponse<Data>)=>{
    try {
        const { id } = req.query;
        const teacher_id= id?.toString().substring('teacher_id='.length)
        const teacher_temp = await prisma.teacher.findFirst({
            where: {
              id: Number(teacher_id),
            },
          });
        await deleteFile(teacher_temp?.cv_url || "");
        await deleteFile(teacher_temp?.third_level_degree || "");
        const teacher = await prisma.teacher.delete({
            where:{
                id:Number(teacher_id)
            }
        })       
        return res.status(200).json(teacher)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:'No se pudo eliminar el profesor'})
    }
}