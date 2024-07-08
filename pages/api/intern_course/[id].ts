import { prisma } from "@/apis";
import { InternCourseModel } from "@/models";
import { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | InternCourseModel | InternCourseModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      if (id?.includes("course_id=")) {
        return getInternCourseById(req, res)
      }else if(id?.includes("teacher_id=")){
        return getInternCourseByIdTeacher(req, res)
      }
    case "POST":
      if (id?.includes("course_ids")) {
        return postInternCourseByIds(req, res);
      }
    case "PUT":
      if (id?.includes("course_id=")) {
        return updateInternCourse(req, res);
      }
    case "DELETE":
      if (id?.includes("course_id=")) {
        return deleteInternCourseById(req, res);
      }
    default:
      res.status(200).json({ message: "Example" });
  }
}

const getInternCourseById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const course_id = id?.toString().substring("course_id=".length);
    const intern_course = await prisma.intern_course.findFirst({
      where: {
        id: Number(course_id),
      },
    });
    if (!intern_course) {
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      });
    }
    return res.status(200).json(intern_course);
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const getInternCourseByIdTeacher= async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const teacher_id = id?.toString().substring("teacher_id=".length);
    const intern_courses=await prisma.intern_course.findMany({
      where:{
        teacher_id:Number(teacher_id)
      }
    })
    if(!intern_courses){
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      })
    }
    return res.status(200).json(intern_courses)
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
}

const postInternCourseByIds= async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const {course_ids}=req.body
    const intern_courses=await prisma.intern_course.findMany({
      where:{
        id:{
          in:course_ids
        }
      }
    })
    if(!intern_courses){
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      })
    }
    return res.status(200).json(intern_courses)
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
}

const updateInternCourse = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const course_id = id?.toString().substring("course_id=".length);
    const { title, content, start_at, end_at, img_url, teacher_id,is_start } = req.body;
    const intern_course = await prisma.intern_course.update({
      where: {
        id: Number(course_id),
      },
      data: {
        title,
        content,
        start_at,
        end_at,
        img_url,
        teacher_id,
        is_start
      },
    });
    if (!intern_course) {
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      });
    }
    return res.status(200).json(intern_course);
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const deleteInternCourseById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const course_id = id?.toString().substring("course_id=".length);
    const intern_course = await prisma.intern_course.delete({
      where: {
        id: Number(course_id),
      },
    });
    return res.status(200).json(intern_course);
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};
