import { prisma } from "@/apis";
import { InternInscriptionModel } from "@/models";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {message:string} | InternInscriptionModel | InternInscriptionModel[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    switch (req.method) {
      case "GET":
        return getInternInscription(res);
      case "POST":
        return createInternInscription(req, res);
      default:
        return res.status(400).json({ message: "Endpoint no existe" });
    }
  }

const getInternInscription = async(res: NextApiResponse<Data>) => {
    try {
        const intern_inscription = await prisma.intern_inscription.findMany()
        return res.status(200).json(intern_inscription)
    } catch (error) {
        return res.status(400).json({message:"Error interno del servidor"})
    }
}

const createInternInscription= async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) => {
    try {
        const {student_id, course_id}=req.body
        console.log(req.body);
        const intern_inscription = await prisma.intern_inscription.create({
            data:{
                student_id,
                course_id
            }
        })
        return res.status(200).json(intern_inscription)
    } catch (error) {
        return res.status(400).json({message:"Error interno del servidor"})
    }
  }