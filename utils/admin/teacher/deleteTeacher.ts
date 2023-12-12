import { enagApi } from "@/apis"

export const deleteTeacher=async(teacher:any)=>{
    try {
        const res = await enagApi.delete(`/teachers/teacher_id=${teacher.id}`)
        return res
    } catch (error) {
        return error
    }
}