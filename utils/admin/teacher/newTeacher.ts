import { enagApi } from "@/apis"
import { uploadFile } from "@/utils"

export const newTeacher=async(teacher:any)=>{
    try {
        
        const resID = await uploadFile(teacher.id_card_file)
        const resCV= await uploadFile(teacher.cv_file)        
        const resTLD = await uploadFile(teacher.third_level_degree_file)
        
        const body={
            id: teacher.id,
            ID_card_url: resID.url,
            cv_url: resCV.url,
            third_level_degree: resTLD.url,
            user_id: teacher.user_id,
            names: teacher.names,
            last_names: teacher.last_names,
        }

        const res = await enagApi.post(`/teachers`,body)
        return res
    } catch (error) {
        return error
    }
}