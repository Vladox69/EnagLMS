import { prisma } from "@/apis";
import { InternCourseModel } from "@/models";
import { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | InternCourseModel | InternCourseModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getInternCourse(res);
    case "POST":
      return createInternCourse(req, res);
    default:
      return res.status(400).json({ message: "Endpoint no existe" });
  }
}

const getInternCourse = async (res: NextApiResponse<Data>) => {
  try {
    const intern_inscription = await prisma.intern_course.findMany();
    if(!intern_inscription){
      return res.status(200).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.'});
    }
    return res.status(200).json(intern_inscription);
  } catch (error) {
    console.log('Failed to retrieve resource. The requested data is missing or inaccessible.',error);
    return res.status(400).json({ message: 'Failed to retrieve resource. The requested data is missing or inaccessible.' });
  }
};

const createInternCourse = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { title, content, start_at, end_at, img_url, teacher_id } = req.body
    const intern_course = await prisma.intern_course.create({
        data:{
            title,
            content,
            start_at,
            end_at,
            img_url,
            teacher_id
        }
    })
    return res.status(200).json(intern_course)
  } catch (error) {
    return res.status(400).json({ message: "Error interno del servidor" });
  }
};
