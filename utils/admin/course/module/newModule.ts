import { enagApi } from "@/apis"
import { uploadFile } from "@/utils"

export const newModule=async(module:any)=>{
    try {

        // const res_img=await uploadFile(module.file)

        const body={
            id:module.id,
            title:module.title,
            content:module.content,
            course_id:module.course_id,
            teacher_id:module.teacher_id,
            hours:0,
            img_url:''
        }
        const res = await enagApi.post(`/modules`,body)
        return res
    } catch (error) {
        return error
    }
}