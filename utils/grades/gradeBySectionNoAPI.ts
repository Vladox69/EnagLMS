import {
  ActivityModel,
  SectionModel,
  StudentModel,
  SubmissionModel,
} from "@/models";

export const gradeBySectionNoAPI = (
  section: SectionModel,
  activities: ActivityModel[],
  submissions: SubmissionModel[],
  student: StudentModel
) => {
  const activitiesTemp: ActivityModel[] = activities.filter(
    (act) => act.section_id == section.id
  );
  let total = 0;
  activitiesTemp.map((activity) => {
    const submission = submissions.find(
      (s) => s.activity_id == activity.id && student.id == s.student_id
    );
    const grade = (submission?.grade! * activity.ponderation) / 10;
    total = total + grade;
  });
  return {
    section,
    student,
    total,
  };
};
