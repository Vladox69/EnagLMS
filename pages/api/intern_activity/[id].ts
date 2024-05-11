import { prisma } from "@/apis";
import { ActivityInternModel } from "@/models";
import { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | ActivityInternModel | ActivityInternModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      if (id?.includes("activity_id=")) {
        return getInternActivityById(req, res);
      } else if (id?.includes("course_id=")) {
        return getInternActivityByIdCourse(req, res);
      }
    case "PUT":
      if (id?.includes("activity_id=")) {
        return updateInternActivity(req, res);
      }
    case "DELETE":
      if (id?.includes("activity_id=")) {
        return deleteInternActivityById(req, res);
      }
    default:
      res.status(200).json({ message: "Example" });
  }
}

const getInternActivityById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const activity_id = id?.toString().substring("activity_id=".length);
    const activity_intern = await prisma.activity_intern.findFirst({
      where: {
        id: Number(activity_id),
      },
    });
    if (!activity_intern) {
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      });
    }
    return res.status(200).json(activity_intern);
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const getInternActivityByIdCourse = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const course_id = id?.toString().substring("course_id=".length);
    const activity_intern = await prisma.activity_intern.findMany({
      where: {
        course_id: Number(course_id),
      },
    });
    if (!activity_intern) {
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      });
    }
    return res.status(200).json(activity_intern);
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const updateInternActivity = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const activity_id = id?.toString().substring("activity_id=".length);
    const { title, content, course_id } = req.body;
    const activity_intern = await prisma.activity_intern.update({
      where: {
        id: Number(activity_id),
      },
      data: {
        title,
        content,
        course_id,
      },
    });
    if (!activity_intern) {
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      });
    }
    return res.status(200).json(activity_intern);
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const deleteInternActivityById= async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) => {
    try {
        const { id } = req.query;
        const activity_id = id?.toString().substring("activity_id=".length);
        const activity_intern = await prisma.activity_intern.delete({
            where: {
              id: Number(activity_id),
            }
          })
        return res.status(200).json(activity_intern)
    } catch (error) {
        return res.status(400).json({
            message:
              "Failed to retrieve resource. The requested data is missing or inaccessible.",
          });
    }
  }