import { enagApi } from "@/apis";
import { ActivityModel, InscriptionModel, ModuleModel, SectionModel } from "@/models";


export const newActivity=async(activity:ActivityModel)=>{
    try {
        
        const body={
            title:activity.title,
            content:activity.content,
            time_due:activity.time_due,
            section_id:activity.section_id
        }

        const {data:section}=await enagApi.get<SectionModel>(`/sections/section_id=${activity.section_id}`)
        
        const {data:module}=await enagApi.get<ModuleModel>(`/modules/module_id=${section.module_id}`)
        const {data:students}=await enagApi.get<InscriptionModel[]>(`/inscriptions/course_id=${module.course_id}`)
        
        const res = await enagApi.post<ActivityModel>(`/activities`,body)

        const submissionPromises=students.map(async(student)=>{
            const body={
                grade:0,
                comment:'',
                student_id:student.id,
                activity_id:res.data.id,
                state_gra:'',
                state_sub:''
            }
            const {data:submission}=await enagApi.post(`/submissions/`,body)
            return submission;
        })
        await Promise.all(submissionPromises);

        return res;

    } catch (error) {
        return error;
    }
}