import { prisma } from "@/apis";
import { CourseModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";
import { deleteFile } from "@/utils/deleteFiles";

type Data = { message: string } | CourseModel | CourseModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      if (id?.includes("course_id=")) {
        return getCourseById(req, res);
      }
    case "PUT":
      if (id?.includes("course_id=")) {
        return updateCourse(req, res);
      }
    case "DELETE":
      if (id?.includes("course_id=")) {
        return deleteCourseById(req, res);
      }
    default:
      res.status(200).json({ message: "Example" });
  }
}

const getCourseById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const course_id = id?.toString().substring("course_id=".length);
    const course = await prisma.course.findFirst({
      where: {
        id: Number(course_id),
      },
    });
    if (!course) {
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      });
    }
    return res.status(200).json(course);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const updateCourse = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const {
      topic,
      content,
      start_at,
      end_at,
      modality,
      objective,
      periods,
      qualification,
      requirements,
      type,
      visible,
      img_url,
      is_start
    } = req.body;
    const course_id = id?.toString().substring("course_id=".length);

    const course_temp = await prisma.course.findFirst({
      where: {
        id: Number(course_id),
      },
    });

    if (course_temp?.img_url != img_url) {
      await deleteFile(course_temp?.img_url||'')
    }

    const course = await prisma.course.update({
      where: {
        id: Number(course_id),
      },
      data: {
        topic,
        content,
        start_at,
        end_at,
        modality,
        objective,
        periods,
        qualification,
        requirements,
        type,
        visible,
        img_url,
        is_start
      },
    });
    if (course == undefined) {
      return res.status(200).json({ message: "No existe curso para editar" });
    }
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ message: "Error al actualizar registro" });
  }
};

const deleteCourseById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const course_id = id?.toString().substring("course_id=".length);
    const course_temp = await prisma.course.findFirst({
      where: {
        id: Number(course_id),
      },
    });

    await deleteFile(course_temp?.img_url||'')
    const course = await prisma.course.delete({
      where: {
        id: Number(course_id),
      },
    });
    return res.status(200).json(course);
  } catch (error) {
    console.log("Error al eliminar el curso", error);
    return res.status(200).json({ message: "Error interno del servidor" });
  }
};
