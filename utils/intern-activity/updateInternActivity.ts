import { enagApi } from "@/apis"

export const updateInternActivity=async(activity:any)=>{
    try {
        const body={
            title:activity.title,
            content:activity.content,
            course_id:activity.course_id,
            date:activity.date
        }
        const res=await enagApi.put(`/intern_activity/activity_id=${activity.id}`,body)
        return res
    } catch (error) {
        return error
    }
}