import { enagApi } from "@/apis";
import { ModuleModel, SectionModel, StudentModel } from "@/models";
import { gradeBySection } from "./gradeBySection";

export const gradeByModule = async (
  module: ModuleModel,
  student: StudentModel
) => {
  try {
    const { data: secs } = await enagApi.get<SectionModel[]>(
      `/sections/module_id=${module.id}`
    );
    let sectionGradeGetPromises:any[]=[]
    let sectionGradePromises:any[]=[]
    let sectionGrade:any[]=[]
    let subTotal=0;
    let total=0;
    secs.map((section)=>{
        sectionGradeGetPromises.push(gradeBySection(section,student))
    })
    sectionGradePromises=await Promise.all(sectionGradeGetPromises)
    sectionGradePromises.map((sectionGrade)=>{
        subTotal=subTotal+sectionGrade.total
    })
    total=subTotal/sectionGradePromises.length
    return{
        module,
        student,
        total
    }
  } catch (error) {
    return error;
  }
};
