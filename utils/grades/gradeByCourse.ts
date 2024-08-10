import { enagApi } from "@/apis";
import { CourseModel, ModuleModel, StudentModel } from "@/models";
import { gradeByModule } from "./gradeByModule";

export const gradeByCouse = async (
  course: CourseModel,
  student: StudentModel
) => {
  try {
    const { data:mdls } = await enagApi.get<ModuleModel[]>(
      `/modules/course_id=${course.id}`
    );
    let moduleGradeGetPromise:any[]=[]
    let moduleGradePromise:any[]=[]
    let subTotal=0;
    let total=0;
    mdls.map((mod)=>{
        moduleGradeGetPromise.push(gradeByModule(mod,student))
    })
    moduleGradePromise=await Promise.all(moduleGradeGetPromise)
    moduleGradePromise.map((mdl)=>{
        subTotal=subTotal+mdl.total
    })
    total=subTotal/moduleGradePromise.length
    return{
        course,
        student,
        total
    }
  } catch (error) {
    return error;
  }
};
