import { prisma } from "@/apis";
import { ModuleResourceModel } from "@/models";
import { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | ModuleResourceModel | ModuleResourceModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getResources(res);
    case "POST":
      return createResource(req, res);
    default:
      break;
  }
  res.status(200).json({ message: "Example" });
}

const getResources = async (res: NextApiResponse<Data>) => {
  try {
    const resources = await prisma.module_resource.findMany();
    return res.status(200).json(resources);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error al obtener recursos" });
  }
};

const createResource = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        const { url_resource, module_id, title } = req.body;
        const resoruce = await prisma.module_resource.create({
            data: {
                title,
                url_resource,
                module_id,
            }
        })
        return res.status(200).json(resoruce);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error al crear recurso' });
    }
}