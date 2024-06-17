import { enagApi } from "@/apis"
import { uploadFile } from "@/utils"

export const newCourse = async (course: any) => {
    try {

        const res_img = await uploadFile(course.img_file)
        
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
            visible:course.visible,
            img_url:res_img.url,
            is_start:course.is_start
        }
        const res = await enagApi.post(`/courses`,body)
        return res
    } catch (error) {
        return error
    }
}