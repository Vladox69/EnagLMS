import { prisma } from "@/apis";
import { ResourceModel } from "@/models/resources";
import { deleteFile } from "@/utils/deleteFiles";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | ResourceModel | ResourceModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      if (id?.includes("type=")) {
        return getResourcesByType(req, res);
      }
    case "DELETE":
      return deleteResourceById(req, res);
    default:
      res.status(200).json({ message: "Example" });
  }
}

const getResourcesByType = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const type = id?.toString().substring("type=".length);
    const resources = await prisma.resources.findMany({
      where: {
        type: type,
      },
    });
    return res.status(200).json(resources);
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const deleteResourceById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const resources_id = id?.toString().substring("resource_id=".length);
    const resource_temp=await prisma.resources.findFirst({
        where:{
            id:Number(resources_id)
        }
    })
    if(resource_temp?.type=='image'){
        await deleteFile(resource_temp?.url_resource||'')
    }
    const resource=await prisma.resources.delete({
        where:{
            id:Number(resources_id)
        }
    })
    return res.status(200).json(resource)
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};
