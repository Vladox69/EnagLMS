import { enagApi } from "@/apis"
import { uploadFile } from "@/utils"

export const newModule=async(module:any)=>{
    try {
        const res_img=await uploadFile(module.img_file)
        let img_url="";
        if(res_img.status==200){
            img_url=res_img.url
        }
        const body={
            id:module.id,
            title:module.title,
            content:module.content,
            course_id:module.course_id,
            teacher_id:module.teacher_id,
            hours:0,
            img_url
        }
        const res = await enagApi.post(`/modules`,body)
        console.log(res);
        
        return res
    } catch (error) {
        return error
    }
}