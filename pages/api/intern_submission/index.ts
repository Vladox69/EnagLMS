import { prisma } from "@/apis";
import { SubmissionInternModel } from "@/models";
import { NextApiRequest, NextApiResponse } from "next";

type Data =
  | { message: string }
  | SubmissionInternModel
  | SubmissionInternModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getInternSubmission(res);
    case "POST":
      return createInternSubmission(req, res);
    default:
      return res.status(400).json({ message: "Endpoint no existe" });
  }
}

const getInternSubmission = async (res: NextApiResponse<Data>) => {
  try {
    const submission_intern = await prisma.submission_intern.findMany();
    return res.status(200).json(submission_intern);
  } catch (error) {
    return res.status(400).json({ message: "Error interno del servidor" });
  }
};

const createInternSubmission = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { url_resource, activity_id, student_id, date } = req.body;
    console.log(req.body);
    
    const submission_intern = await prisma.submission_intern.create({
        data:{
            url_resource,
            activity_id,
            student_id,
            date
        }
    })
    return res.status(200).json(submission_intern)
  } catch (error) {
    return res.status(400).json({ message: "Error interno del servidor" });
  }
};
