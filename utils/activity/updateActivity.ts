import { enagApi } from "@/apis";
import { ActivityModel } from "@/models";


export const updateActivity=async(activity:ActivityModel)=>{
    try {
        const body={
            id:activity.id,
            title:activity.title,
            content:activity.content,
            time_due:activity.time_due,
            section_id:activity.section_id
        }
        const res =await enagApi.put(`/activities/activity_id=${activity.id}`,body)
        return res;
    } catch (error) {
        return error;
    }
}