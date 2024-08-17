import { enagApi } from "@/apis"
import { uploadFile } from "@/utils"

export const newTeacher=async(teacher:any)=>{
    try {
        
        const resCV= await uploadFile(teacher.cv_file)     
        let cv_url="";
        if(resCV.status==200){
            cv_url=resCV.url
        }   
        const resTLD = await uploadFile(teacher.third_level_degree_file)
        let third_level_degree="";
        if(resTLD.status==200){
            third_level_degree=resTLD.url
        }
        const body={
            id: teacher.id,
            cv_url,
            third_level_degree,
            user_id: teacher.user_id,
        }

        const res = await enagApi.post(`/teachers`,body)
        return res
    } catch (error) {
        return error
    }
}