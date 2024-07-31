import { enagApi, prisma } from "@/apis";
import { ActivityModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | { message: string }
  | { message: string; count: number }
  | ActivityModel[]
  | ActivityModel;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      if (id?.includes("activity_id=")) {
        return getActivityById(req, res);
      } else if (id?.includes("section_id=")) {
        return getActivitiesByIdSection(req, res);
      } else if (id?.includes("module_id=")) {
        return getActivitiesByIdModule(req, res);
      }
    case "DELETE":
      if (id?.includes("section_id=")) {
        return deleteActivitiesByIdSection(req, res);
      } else if (id?.includes("activity_id=")) {
        return deleteActivityById(req, res);
      }
    case "PUT":
      return updateActivity(req, res);
    default:
      break;
  }
}

const getActivitiesByIdModule = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const module_id = id?.toString().substring("module_id=".length);
    const sections = await prisma.section.findMany({
      where: {
        module_id: Number(module_id),
      },
    });
    const section_ids = sections.map((section) => section.id);
    const activities = await prisma.activity.findMany({
      where: {
        section_id: {
          in: section_ids,
        },
      },
    });
    if (!activities) {
      return res
        .status(200)
        .json({
          message:
            "Failed to fetch resource. The requested data is missing or inaccessible.",
        });
    }
    return res.status(200).json(activities);
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

const getActivitiesByIdSection = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const section_id = id?.toString().substring("section_id=".length);
    const activities = await prisma.activity.findMany({
      where: {
        section_id: Number(section_id),
      },
    });
    if (!activities) {
      return res
        .status(200)
        .json({
          message:
            "Failed to fetch resource. The requested data is missing or inaccessible.",
        });
    }
    return res.status(200).json(activities);
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

const getActivityById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const activity_id = id?.toString().substring("activity_id=".length);
    const activity = await prisma.activity.findFirst({
      where: {
        id: Number(activity_id),
      },
    });
    if (!activity) {
      return res
        .status(200)
        .json({
          message:
            "Failed to fetch resource. The requested data is missing or inaccessible.",
        });
    }
    return res.status(200).json(activity);
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

const updateActivity = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;

    const { title, content, time_due, ponderation } = req.body;

    const activity_id = id?.toString().substring("activity_id=".length);
    const activity = await prisma.activity.update({
      where: {
        id: Number(activity_id),
      },
      data: {
        time_due,
        title,
        content,
        ponderation,
      },
    });

    if (!activity) {
      return res
        .status(200)
        .json({ message: "No existe actividad para actualizar" });
    }
    return res.status(200).json(activity);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error al actualizar actividad" });
  }
};

const deleteActivitiesByIdSection = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const section_id = id?.toString().substring("section_id=".length);
    const activities = await prisma.activity.deleteMany({
      where: {
        section_id: Number(section_id),
      },
    });

    if (activities.count == 0) {
      return res
        .status(200)
        .json({ message: "No hay actividades por eliminar" });
    }
    return res
      .status(200)
      .json({ message: "Actividades eliminadas", count: activities.count });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error al eliminar la actividad" });
  }
};

const deleteActivityById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const activity_id = id?.toString().substring("activity_id=".length);
    const activity = await prisma.activity.delete({
      where: {
        id: Number(activity_id),
      },
    });
    return res.status(200).json(activity);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error al eliminar la actividad" });
  }
};
