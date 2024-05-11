import { prisma } from "@/apis";
import { StudentModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | StudentModel | StudentModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      if (id?.includes("student_id=")) {
        return getStudentById(req, res);
      } else if (id?.includes("course_id=")) {
        return getStudentsByIdCourse(req, res);
      } else {
        return getStudentByIdUser(req, res);
      }
    case "POST":
      if (id?.includes("student_ids")) {
        return postStudentsByIds(req, res);
      }
    case "PUT":
      if (id?.includes("student_id=")) {
        return updateStudent(req, res);
      }
    case "DELETE":
      if (id?.includes("student_id=")) {
        return deleteStudent(req, res);
      }
    default:
      break;
  }
  res.status(200).json({ message: "Example" });
}

const getStudentById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const student_id = id?.toString().substring("student_id=".length);
    const student = await prisma.student.findFirst({
      where: {
        id: Number(student_id),
      },
    });
    if (!student) {
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      });
    }
    return res.status(200).json(student);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const getStudentByIdUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const user_id = id?.toString().substring("user_id=".length);
    const student = await prisma.student.findFirst({
      where: {
        user_id: Number(user_id),
      },
    });
    if (!student) {
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      });
    }
    return res.status(200).json(student);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const getStudentsByIdCourse = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const course_id = id?.toString().substring("course_id=".length);
    const inscriptions = await prisma.inscription.findMany({
      where: {
        course_id: Number(course_id),
      },
    });
    const inscription_ids = inscriptions.map(
      (inscription) => inscription.student_id
    );
    const students = await prisma.student.findMany({
      where: {
        id: {
          in: inscription_ids,
        },
      },
    });
    if (!students) {
      return res.status(200).json({
        message:
          "Failed to fetch resource. The requested data is missing or inaccessible.",
      });
    }
    return res.status(200).json(students);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const postStudentsByIds = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const {inscription_ids}=req.body
    const students= await prisma.student.findMany({
        where:{
            id:{
                in:inscription_ids
            }
        }
    })
    if (!students) {
        return res.status(200).json({
          message:
            "Failed to fetch resource. The requested data is missing or inaccessible.",
        });
      }
      return res.status(200).json(students);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "No se puedo actualizar el estudiante" });
  }
};

const updateStudent = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { ID_card_url, study_certificate_url, user_id, names, last_names } =
      req.body;
    const { id } = req.query;
    const student_id = id?.toString().substring("student_id=".length);
    const student = await prisma.student.update({
      where: {
        id: Number(student_id),
      },
      data: {
        ID_card_url,
        study_certificate_url,
        user_id,
        names,
        last_names,
      },
    });
    if (!student) {
      return res
        .status(200)
        .json({ message: "No existe ningún registo para actualizar" });
    }
    return res.status(200).json(student);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "No se puedo actualizar el estudiante" });
  }
};

const deleteStudent = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const student_id = id?.toString().substring("student_id=".length);
    const student = await prisma.student.delete({
      where: {
        id: Number(student_id),
      },
    });
    return res.status(200).json(student);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "No se pudo eliminar el estudiante" });
  }
};
