import { uploadFile } from "@/utils"
import { enagApi } from '@/apis';

export const updateTeacher = async (teacher: any) => {
    try {
        let resID
        let resCV
        let resTLD
        if(teacher.id_card_file!=undefined){
            resID = await uploadFile(teacher.id_card_file)
            
        }
        if(teacher.cv_file!=undefined){
            resCV= await uploadFile(teacher.cv_file)
        }
        if(teacher.third_level_degree_file!=undefined){
            resTLD = await uploadFile(teacher.third_level_degree_file)
        }

        const body={
            id: teacher.id,
            ID_card_url: (teacher.id_card_file!=undefined) ? resID?.url:teacher.ID_card_url,
            cv_url: (teacher.cv_file!=undefined)? resCV?.url:teacher.cv_url,
            third_level_degree: (teacher.third_level_degree_file!=undefined)? resTLD?.url:teacher.third_level_degree,
            user_id: teacher.user_id,
            names: teacher.names,
            last_names: teacher.last_names,
        }
        const res = await enagApi.put(`/teachers/teacher_id=${teacher.id}`,body)
        return res
    } catch (error) {
        return error
    }
}