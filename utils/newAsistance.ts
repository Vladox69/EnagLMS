import { enagApi } from "@/apis";
import { AsistanceModel, InscriptionModel, ModuleModel, StudentModel } from "@/models";

export const newAsistance = async (asistance: AsistanceModel) => {

    try {
        const body = {
            date: asistance.date,
            description: asistance.description,
            module_id: asistance.module_id
        }
        const {data:mdl} = await enagApi.get<ModuleModel>(`/modules/module_id=${asistance.module_id}`);


        const { data: inscriptions } = await enagApi.get<InscriptionModel[]>(`/inscriptions/course_id=${mdl.course_id}`);

        const studentPromises = inscriptions.map(async (inscription) => {
          const { data: student } = await enagApi.get<StudentModel[]>(`/students/student_id=${inscription.student_id}`);
          return student;
        })
        const students = await Promise.all(studentPromises);
        
        const res  = await enagApi.post<AsistanceModel>(`/asistances/`, body)
        
        const asistanceRegisterPromises=students.map(async(student:any)=>{
            const body={
                status:'PRESENTE',
                student_id:student.id,
                asistance_id:res.data.id
            }
            const {data:asistance_register}=await enagApi.post(`/asistances/registers`,body);
            return asistance_register;
        })

        const asistance_registers=await Promise.all(asistanceRegisterPromises);
        
        return res;
    } catch (error) {
        return error;
    }
}