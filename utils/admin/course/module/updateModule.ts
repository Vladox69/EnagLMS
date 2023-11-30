import { enagApi } from "@/apis"

export const updateModule=async(module:any)=>{
    try {
        const body={
            id:module.id,
            title:module.title,
            content:module.content,
            course_id:module.course_id,
            teacher_id:module.teacher_id
        }
        const res = await enagApi.put(`/modules/module_id=${module.id}`,body)
        return res
    } catch (error) {
        return error
    }
}