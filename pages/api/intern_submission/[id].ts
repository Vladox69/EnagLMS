import { prisma } from "@/apis";
import { SubmissionInternModel } from "@/models";
import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";
import { deleteFile } from "@/utils/deleteFiles";

cloudinary.config({
  cloud_name: "dhuqvvw4v",
  api_key: "132911996518186",
  api_secret: "uUqIbyLaHZywSLe7WKnC37FxSu4",
});

type Data =
  | { message: string }
  | { message: string; count: number }
  | SubmissionInternModel
  | SubmissionInternModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      if (id?.includes("student_id=") && id?.includes("activity_id=")) {
        return getSubmissionByIdActivityAndStudent(req, res);
      } else if (id?.includes("submission_id=")) {
        return getInternSubmissionById(req, res);
      } else if (id?.includes("activity_id=")) {
        return getInternSubmissionByIdActivity(req, res);
      }
    case "POST":
      if (id?.includes("activity_id=")) {
        return createSubmissionsByIdStudents(req, res);
      }
    case "PUT":
      if (id?.includes("submission_id=")) {
        return updateInternSubmission(req, res);
      }
    case "DELETE":
      if (id?.includes("submission_id=")) {
        return deleteInternSubmissionById(req, res);
      } else if (id?.includes("activity_id=")) {
        return deleteInternSubmissionsByIdActivity(req, res);
      }
    default:
      res.status(200).json({ message: "Example" });
  }
}

const getInternSubmissionById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const submission_id = id?.toString().substring("submission_id=".length);
    const submission_intern = await prisma.submission_intern.findFirst({
      where: {
        id: Number(submission_id),
      },
    });
    if (!submission_intern) {
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      });
    }
    return res.status(200).json(submission_intern);
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const getInternSubmissionByIdActivity = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const activity_id = id?.toString().substring("activity_id=".length);
    const submission_intern = await prisma.submission_intern.findMany({
      where: {
        activity_id: Number(activity_id),
      },
    });
    if (!submission_intern) {
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      });
    }
    return res.status(200).json(submission_intern);
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const getSubmissionByIdActivityAndStudent = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const qp = id?.toString().split("&");
    console.log(id);
    const student_id = qp![0].toString().substring("student_id=".length);
    const activity_id = qp![1].toString().substring("activity_id=".length);

    const submission = await prisma.submission_intern.findFirst({
      where: {
        activity_id: Number(activity_id),
        student_id: Number(student_id),
      },
    });
    if (!submission) {
      return res
        .status(200)
        .json({
          message:
            "Failed to fetch resource. The requested data is missing or inaccessible.",
        });
    }
    return res.status(200).json(submission);
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

const createSubmissionsByIdStudents = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const activity_id = id?.toString().substring("activity_id=".length);
    const { inscription_ids } = req.body;
    const currentDate = new Date();
    currentDate.setUTCHours(0, 0, 0, 0);
    const date = currentDate.toISOString();
    const data = inscription_ids.map((inscription: number) => {
      return {
        activity_id: Number(activity_id),
        student_id: inscription,
        url_resource: "",
        date:"2000-08-18T00:00:00.000z"
      };
    });
    const submission_count = await prisma.submission_intern.createMany({
      data,
    });
    if (submission_count.count != 0) {
      const submission_intern = await prisma.submission_intern.findMany({
        where: {
          activity_id: Number(activity_id),
        },
      });
      return res.status(200).json(submission_intern);
    }
    return res.status(400).json({
      message:
        "Failed to create. The requested data is missing or inaccessible.",
    });
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const updateInternSubmission = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const submission_id = id?.toString().substring("submission_id=".length);
    const { url_resource,date } = req.body;

    const submission_temp = await prisma.submission_intern.findFirst({
      where: {
        id: Number(submission_id),
      },
    });

    if (submission_temp?.url_resource != url_resource) {
      await deleteFile(submission_temp?.url_resource || "");
    }

    const submission_intern = await prisma.submission_intern.update({
      where: {
        id: Number(submission_id),
      },
      data: {
        url_resource,
        date
      },
    });
    if (!submission_intern) {
      return res.status(200).json({
        message:
          "Failed to retrieve resource. The requested data is missing or inaccessible.",
      });
    }
    return res.status(200).json(submission_intern);
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const deleteInternSubmissionById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const submission_id = id?.toString().substring("submission_id=".length);
    const submission_temp = await prisma.submission_intern.findFirst({
      where: {
        id: Number(submission_id),
      },
    });

    await deleteFile(submission_temp?.url_resource || "");

    const submission_intern = await prisma.submission_intern.delete({
      where: {
        id: Number(submission_id),
      },
    });
    return res.status(200).json(submission_intern);
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};

const deleteInternSubmissionsByIdActivity = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const activity_id = id?.toString().substring("activity_id=".length);
    const submissions = await prisma.submission_intern.deleteMany({
      where: {
        activity_id: Number(activity_id),
      },
    });
    if (submissions.count == 0) {
      return res.status(200).json({ message: "No hay entregas por eliminar" });
    }
    return res.status(200).json({
      message: "Entregas eliminadas con éxito",
      count: submissions.count,
    });
  } catch (error) {
    return res.status(400).json({
      message:
        "Failed to retrieve resource. The requested data is missing or inaccessible.",
    });
  }
};
