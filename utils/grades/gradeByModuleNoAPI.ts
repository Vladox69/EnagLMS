import {
  ActivityModel,
  ModuleModel,
  SectionModel,
  StudentModel,
  SubmissionModel,
} from "@/models";
import { gradeBySectionNoAPI } from "./gradeBySectionNoAPI";

export const gradeByModuleNoAPI = (
  sections: SectionModel[],
  module: ModuleModel,
  student: StudentModel,
  activities: ActivityModel[],
  submissions: SubmissionModel[]
) => {
  const sectionsTemp: SectionModel[] = sections.filter(
    (sect) => sect.module_id == module.id
  );
  console.log(sectionsTemp);
  
  let sectionsGrades: any[] = [];
  let subTotal = 0;
  let total = 0;

  sectionsTemp.map((sect) => {
    const sectionsGradeTemp = gradeBySectionNoAPI(
      sect,
      activities,
      submissions,
      student
    );
    sectionsGrades = [...sectionsGrades, sectionsGradeTemp];
  });
  
  sectionsGrades.map((sg)=>{
    subTotal=subTotal+sg.total
  })
  total=subTotal/sectionsGrades.length
  return{
    module,
    student,
    total
  }
};
