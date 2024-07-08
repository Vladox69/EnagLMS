import { prisma } from "@/apis";
import { ResourceModel } from "@/models/resources";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | ResourceModel | ResourceModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getResources(res);
    case "POST":
      return createResoruce(req, res);
    case "PUT":
      return {};
    default:
      return res.status(400).json({ message: "Endpoint no existe" });
  }
}

const getResources = async (res: NextApiResponse<Data>) => {
  try {
    const resources = await prisma.resources.findMany();
    res.status(200).json(resources);
  } catch (error) {
    console.log(
      "Failed to retrieve resource. The requested data is missing or inaccessible.",
      error
    );
    res
      .status(500)
      .json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      });
  }
};

const createResoruce = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { url_resource, title, description, type } = req.body;
    const resource = await prisma.resources.create({
      data: {
        url_resource, title, description, type
      },
    });
    return res.status(200).json(resource);
  } catch (error) {
    console.log(
      "Failed to create resource. The provided data is invalid or incomplete.",
      error
    );
    return res
      .status(400)
      .json({
        message:
          "Failed to create resource. The provided data is invalid or incomplete.",
      });
  }
};
