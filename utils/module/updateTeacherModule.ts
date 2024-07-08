import { enagApi } from "@/apis"
import { uploadFile } from "../uploadFiles";

export const updateTeacherModule=async (module:any)=>{
    try {
        let resImg;
        if(module.img_file!=null){
            resImg=await uploadFile(module.img_file)
        }
        const body = {
            id: module.id,
            title: module.title,
            content: module.content,
            img_url: (module.img_file!=null)? resImg?.url:module.img_url,
            course_id:module.course_id,
            hours:module.hours,
            teacher_id:module.teacher_id
          };
        const res = await enagApi.put(`/modules/module_id=${module.id}`,body)
        return res
    } catch (error) {
        return error
    }
}