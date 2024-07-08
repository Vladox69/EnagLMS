import { enagApi, prisma } from "@/apis";
import { SubmissionModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | { message: string }
  | { message: string; count: number }
  | SubmissionModel
  | SubmissionModel[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      if (id?.includes("student_id=") && id?.includes("activity_id=")) {
        return getSubmissionByIdActivityAndStudent(req, res);
      } else if (id?.includes("activity_id=")) {
        return getSubmissionsByIdActivity(req, res);
      } else if (id?.includes("submission_id=")) {
        return getSubmissionById(req, res);
      }
    case "POST":
      if (id?.includes("activity")) {
        return postSubmissionsByIdActivity(req, res);
      } else if (id?.includes("activity_ids&student_id")) {
        return postSubmissionsByIdStudentActivity(req, res);
      }
    case "PUT":
      return updateSubmission(req, res);
    case "DELETE":
      if (id?.includes("activity_id=")) {
        return deleteSubmissionsByIdActivity(req, res);
      } else if (id?.includes("submission_id=")) {
        return deleteSubmissionById(req, res);
      }
    default:
      break;
  }
  res.status(200).json({ message: "Example" });
}

const getSubmissionByIdActivityAndStudent = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const qp = id?.toString().split("&");

    const student_id = qp![0].toString().substring("student_id=".length);
    const activity_id = qp![1].toString().substring("activity_id=".length);

    const submission = await prisma.submission.findFirst({
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

const getSubmissionsByIdActivity = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;

    const activity_id = id?.toString().substring("activity_id=".length);

    const submissions = await prisma.submission.findMany({
      where: {
        activity_id: Number(activity_id),
      },
    });
    if (!submissions) {
      return res
        .status(200)
        .json({
          message:
            "Failed to fetch resource. The requested data is missing or inaccessible.",
        });
    }
    return res.status(200).json(submissions);
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

const getSubmissionById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;

    const submission_id = id?.toString().substring("submission_id=".length);

    const submission = await prisma.submission.findFirst({
      where: {
        id: Number(submission_id),
      },
    });
    if (!submission) {
      return res
        .status(200)
        .json({ message: "No hay entrega con ese ID:" + `${submission_id} ` });
    }
    return res.status(200).json(submission);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error al obtener entrega" });
  }
};

const postSubmissionsByIdActivity = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const activity_ids = req.body;
    const submissions = await prisma.submission.findMany({
      where: {
        activity_id: {
          in: activity_ids,
        },
      },
    });
    if (!submissions) {
      return res
        .status(200)
        .json({
          message:
            "Failed to fetch resource. The requested data is missing or inaccessible.",
        });
    }
    return res.status(200).json(submissions);
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

const postSubmissionsByIdStudentActivity = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { activity_ids, student_id } = req.body;
    const submissionsNF = await prisma.submission.findMany({
      where: {
        activity_id: {
          in: activity_ids,
        },
      },
    });
    const submissions = submissionsNF.filter(
      (submission) => submission.student_id === Number(student_id)
    );
    if (!submissions) {
      return res
        .status(200)
        .json({
          message:
            "Failed to fetch resource. The requested data is missing or inaccessible.",
        });
    }
    return res.status(200).json(submissions);
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

const updateSubmission = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const { grade, comment, state_gra, state_sub } = req.body;

    const submission_id = id?.toString().substring("submission_id=".length);
    const submission = await prisma.submission.update({
      where: {
        id: Number(submission_id),
      },
      data: {
        grade: Number(grade),
        comment,
        state_gra,
        state_sub,
      },
    });
    if (!submission) {
      return res
        .status(200)
        .json({
          message:
            "Failed to update resource. The target data is missing or cannot be accessed.",
        });
    }
    return res.status(200).json(submission);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        message:
          "Failed to update resource. The target data is missing or cannot be accessed.",
      });
  }
};

const deleteSubmissionsByIdActivity = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const activity_id = id?.toString().substring(`activity_id=`.length);

    const submissions_temp = await prisma.submission.findMany({
      where: {
        activity_id: Number(activity_id),
      },
    });

    if (submissions_temp.length > 0) {
      submissions_temp.map(async (submission) => {
        const { data } = await enagApi.delete(
          `/submissions/resources/submission_id=${submission.id}`
        );
        console.log("Submission delete");
        console.log(data);
      });
    }

    const submissions = await prisma.submission.deleteMany({
      where: {
        activity_id: Number(activity_id),
      },
    });

    if (submissions.count == 0) {
      return res.status(200).json({ message: "No hay entregas por eliminar" });
    }

    return res
      .status(200)
      .json({
        message: "Entregas eliminadas con éxito",
        count: submissions.count,
      });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error al eliminar" });
  }
};

const deleteSubmissionById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;
    const submission_id = id?.toString().substring(`submission_id=`.length);

    const submission = await prisma.submission.delete({
      where: {
        id: Number(submission_id),
      },
    });

    return res.status(200).json(submission);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error al eliminar" });
  }
};
