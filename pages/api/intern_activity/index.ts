import { prisma } from "@/apis";
import { ActivityInternModel } from "@/models";
import { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | ActivityInternModel | ActivityInternModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getInternActivity(res);
    case "POST":
      return createInternActivity(req, res);
    default:
      return res.status(400).json({ message: "Endpoint no existe" });
  }
}

const getInternActivity = async (res: NextApiResponse<Data>) => {
  try {
    const activity_intern = await prisma.activity_intern.findMany();
    return res.status(200).json(activity_intern);
  } catch (error) {
    return res.status(400).json({ message: "Error interno del servidor" });
  }
};

const createInternActivity = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { title, content, course_id } = req.body;
    const activity_intern=await prisma.activity_intern.create({
        data:{
            title,
            content,
            course_id
        }
    })
    return res.status(200).json(activity_intern)
  } catch (error) {
    return res.status(400).json({ message: "Error interno del servidor" });
  }
};
