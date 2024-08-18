import {
  ActivityModel,
  CourseModel,
  ModuleModel,
  SectionModel,
  StudentModel,
  SubmissionModel,
  UserModel,
} from "@/models";
import { gradeByModuleNoAPI } from "./gradeByModuleNoAPI";

export const gradeCourseNoAPI = (
  sections: SectionModel[],
  modules: ModuleModel[],
  student: StudentModel,
  course: CourseModel,
  user: UserModel,
  activities: ActivityModel[],
  submissions: SubmissionModel[]
) => {
  const modulesTemp: ModuleModel[] = modules.filter(
    (mdl) => mdl.course_id == course.id
  );

  let moduleGrades: any[] = [];
  let subTotal = 0;
  let total = 0;
  modulesTemp.map((mdl) => {
    const moduleGradeTemp = gradeByModuleNoAPI(
      sections,
      mdl,
      student,
      activities,
      submissions
    );
    moduleGrades = [...moduleGrades, moduleGradeTemp];
  });

  moduleGrades.map((mg) => {
    subTotal = subTotal + mg.total;
  });
  total = subTotal / moduleGrades.length;
  return {
    user,
    student,
    course,
    total,
  };
};
