import { prisma } from "@/apis";
import { SubmissionResourceModel } from "@/models";
import { deleteFile } from "@/utils/deleteFiles";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | { message: string }
  | { message: string; count: number }
  | SubmissionResourceModel
  | SubmissionResourceModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      if (id?.includes("submission_id=")) {
        return getResourceBySubmissionId(req, res);
      } else if (id?.includes("resource_id=")) {
        return getResourceById(req, res);
      }
    case "DELETE":
      if (id?.includes("submission_id=")) {
        return deleteSubmissionByIdSubmission(req, res);
      } else if (id?.includes("resource_id=")) {
        return deleteResourceById(req, res);
      }
    default:
      break;
  }
  res.status(200).json({ message: "Example" });
}

const getResourceBySubmissionId = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const submission_id = id?.toString().substring("submission_id=".length);
    const submission_resource = await prisma.submission_resource.findMany({
      where: {
        submission_id: Number(submission_id),
      },
    });
    if (!submission_resource) {
      return res.status(200).json(submission_resource);
    }
    return res.status(200).json(submission_resource);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        message:
          "Failed to fetch resource. The requested data is missing or inaccessible.",
      });
  }
};

const getResourceById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const resource_id = id?.toString().substring("resource_id=".length);
    const submission_resource = await prisma.submission_resource.findFirst({
      where: {
        id: Number(resource_id),
      },
    });
    if (!submission_resource) {
      return res
        .status(200)
        .json({ message: "No hay entrega con ese ID:" + id });
    }
    return res.status(200).json(submission_resource);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error al obtener entrega" });
  }
};

const deleteSubmissionByIdSubmission = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const submission_id = id?.toString().substring("submission_id=".length);
    const resources_temp = await prisma.submission_resource.findMany({
      where: {
        submission_id: Number(submission_id),
      },
    });
    resources_temp.map(async (resource)=>{
        await deleteFile(resource.url_resource)
    })

    const submission_resource = await prisma.submission_resource.deleteMany({
      where: {
        submission_id: Number(submission_id),
      },
    });

    if (submission_resource.count == 0) {
      return res
        .status(200)
        .json({
          message:
            "Failed to delete resource. The specified data does not exist or is protected.",
        });
    }
    return res
      .status(200)
      .json({
        message: "Recursos eliminados",
        count: submission_resource.count,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        message:
          "Failed to delete resource. The specified data does not exist or is protected.",
      });
  }
};

const deleteResourceById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const resource_id = id?.toString().substring("resource_id=".length);
    const resource_temp= await prisma.submission_resource.findFirst({
        where:{
            id:Number(resource_id)
        }
    })
    await deleteFile(resource_temp?.url_resource||'')
    const submission_resource = await prisma.submission_resource.delete({
      where: {
        id: Number(resource_id),
      },
    });
    return res.status(200).json(submission_resource);
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "No se pudo eliminar" });
  }
};
