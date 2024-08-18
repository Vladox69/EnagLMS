import { enagApi } from "@/apis";
import {
  ActivityModel,
  ModuleModel,
  StudentModel,
  SubmissionModel,
} from "@/models";

export const gradeByModuleActivity = async (
  activity: ActivityModel,
  student: StudentModel,
  module: ModuleModel
) => {
  try {
    const { data: submission } = await enagApi.get<SubmissionModel>(
      `/submissions/student_id=${student.id}&activity_id=${activity.id}`
    );
    return {
      activity,
      student,
      submission,
      module,
    };
  } catch (error) {
    const submission: SubmissionModel = {
      activity_id: 0,
      comment: "",
      grade: -1,
      id: 0,
      state_gra: "",
      state_sub: "",
      student_id: 0,
      date:new Date()
    };
    return {
      activity,
      student,
      submission,
      module,
    };
  }
};
