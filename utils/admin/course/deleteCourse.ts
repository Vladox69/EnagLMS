import { enagApi } from "@/apis"

export const deleteCourse=async(course:any)=>{
    try {
        const res = await enagApi.delete(`/courses/course_id=${course.id}`)
        return res
    } catch (error) {
        return error
    }
}