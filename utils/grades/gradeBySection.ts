import { enagApi } from "@/apis";
import {
  ActivityModel,
  SectionModel,
  StudentModel,
} from "@/models";

export const gradeBySection = async (
  section: SectionModel,
  student: StudentModel
) => {
  try {
    const { data: acts } = await enagApi.get<ActivityModel[]>(
      `/activities/section_id=${section.id}`
    );
    let submissionsGetPromises: any[] = [];
    let submissionsPromises: any[] = [];
    let submissions: any[] = [];
    acts.map((activity) => {
      submissionsGetPromises.push(
        enagApi.get(
          `/submissions/student_id=${student.id}&activity_id=${activity.id}`
        )
      );
    });
    submissionsPromises = await Promise.all(submissionsGetPromises);
    submissionsPromises.map((submission) => {
      submissions = [...submissions, submission.data];
    });
    submissions = submissions.flat();
    let total = 0;
    acts.map((activity) => {
      const submission = submissions.find((s) => s.activity_id == activity.id);
      const grade = (submission?.grade! * activity.ponderation) / 10;
      total = total + grade;
    });
    return {
      section,
      student,
      total,
    };
  } catch (error) {
    return error;
  }
};
