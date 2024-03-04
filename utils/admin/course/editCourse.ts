import { enagApi } from "@/apis"

export const editCourse=async(course:any)=>{
    try {
        const body={
            id:course.id,
            topic:course.topic,
            content:course.content,
            start_at:course.start_at,
            end_at:course.end_at,
            modality:course.modality,
            objective:course.objective,
            periods:course.periods,
            qualification:course.qualification,
            requirements:course.requirements,
            type:course.type,
            visible:course.visible
        }
        const res =await enagApi.put(`/courses/course_id=${body.id}`,body)
        return res
    } catch (error) {
        return error
    }    
}