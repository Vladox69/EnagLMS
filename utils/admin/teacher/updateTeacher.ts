import { uploadFile } from "@/utils"
import { enagApi } from '@/apis';

export const updateTeacher = async (teacher: any) => {
    try {
        let resCV;
        let resTLD;
        let cv_url="";
        let third_level_degree="";
        if(teacher.cv_file!=undefined){
            resCV= await uploadFile(teacher.cv_file)
            if(resCV.status==200){
                cv_url=resCV.url
            }
        }
        if(teacher.third_level_degree_file!=undefined){
            resTLD = await uploadFile(teacher.third_level_degree_file)
            if(resTLD.status==200){
                third_level_degree=resTLD.url
            }
        }

        const body={
            id: teacher.id,
            cv_url: (teacher.cv_file!=undefined)? cv_url:teacher.cv_url,
            third_level_degree: (teacher.third_level_degree_file!=undefined)? third_level_degree:teacher.third_level_degree,
            user_id: teacher.user_id,
        }
        const res = await enagApi.put(`/teachers/teacher_id=${teacher.id}`,body)
        return res
    } catch (error) {
        return error
    }
}