import { prisma } from "@/apis";
import { ModuleResourceModel } from "@/models";
import { deleteFile } from "@/utils/deleteFiles";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | { message: string }
  | { message: string; count: number }
  | ModuleResourceModel
  | ModuleResourceModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      if (id?.includes("resource_id=")) {
        return getResourceById(req, res);
      } else if (id?.includes("module_id=")) {
        return getResourcesByIdModule(req, res);
      }
    case "PUT": {
      if (id?.includes("resource_id=")) {
        return updateResourceById(req, res);
      }
    }
    case "DELETE":
      if(id?.includes("module_id=")){
        return deleteResourceByIdModule(req,res)
      }
    default:
      break;
  }
  res.status(200).json({ message: "Example" });
}

const getResourcesByIdModule = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const module_id = id?.toString().substring("module_id=".length);
    const module_resource = await prisma.module_resource.findMany({
      where: {
        module_id: Number(module_id),
      },
    });
    if (!module_resource) {
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      });
    }
    return res.status(200).json(module_resource);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
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
    const module_resource = await prisma.module_resource.findFirst({
      where: {
        id: Number(resource_id),
      },
    });
    if (!module_resource) {
      return res
        .status(200)
        .json({ message: "No hay entrega con ese ID:" + id });
    }
    return res.status(200).json(module_resource);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error al obtener entrega" });
  }
};

const updateResourceById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const { title, url_resource, content } = req.body;
    const resource_id = id?.toString().substring("resource_id=".length);
    const resource_temp = await prisma.module_resource.findFirst({
      where: {
        id: Number(resource_id),
      },
    });
    if (resource_temp?.url_resource != url_resource) {
      await deleteFile(resource_temp?.url_resource || "");
    }
    const resource = await prisma.module_resource.update({
      where: {
        id: Number(resource_id),
      },
      data: {
        url_resource,
      },
    });
    return res.status(200).json(resource);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const deleteResourceByIdModule = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const module_id = id?.toString().substring("module_id=".length);
    const resources_temp = await prisma.module_resource.findMany({
      where: {
        module_id: Number(module_id),
      },
    });
    resources_temp.map(async (resource) => {
      await deleteFile(resource.url_resource);
    });
    const module_resource = await prisma.module_resource.deleteMany({
      where: {
        module_id: Number(module_id),
      },
    });

    if (module_resource.count == 0) {
      return res.status(204).json({
        message:
          "Failed to delete resource. The specified data does not exist or is protected.",
      });
    }
    return res.status(200).json({
      message: "Recursos eliminados",
      count: module_resource.count,
    });
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to delete resource. The specified data does not exist or is protected.",
    });
  }
};
