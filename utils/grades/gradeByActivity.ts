import { enagApi } from "@/apis";
import { ActivityModel, StudentModel, SubmissionModel } from "@/models";

export const gradeByActivity = async (
  activity: ActivityModel,
  student: StudentModel
) => {
  try {
    const { data: submission } = await enagApi.get<SubmissionModel>(
      `/submissions/student_id=${student.id}&activity_id=${activity.id}`
    );
    return {
      activity,
      student,
      submission,
    };
  } catch (error) {
    return error
  }
};
