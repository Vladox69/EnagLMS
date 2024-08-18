import { enagApi } from "@/apis";
import {
  ActivityModel,
  SectionModel,
  StudentModel,
  SubmissionModel,
} from "@/models";

export const gradeBySectionActivity = async (
  activity: ActivityModel,
  student: StudentModel,
  section: SectionModel
) => {
  try {
    const { data: submission } = await enagApi.get<SubmissionModel>(
      `/submissions/student_id=${student.id}&activity_id=${activity.id}`
    );
    return {
      activity,
      student,
      submission,
      section,
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
      section,
    };
  }
};
