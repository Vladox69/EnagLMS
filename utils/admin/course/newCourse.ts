import { enagApi } from "@/apis"

export const newCourse = async (course: any) => {
    try {
        const body = {
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
        const res = await enagApi.post(`/courses`,body)
        return res
    } catch (error) {
        return error
    }
}