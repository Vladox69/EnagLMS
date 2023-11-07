import { enagApi } from "@/apis"
import { ActivityModel, SubmissionModel } from "@/models"

export const deleteActivity = async (activity: ActivityModel) => {
    try {
        
        //TODO Eliminar los recursos del storage 

        //Elimina  recursos
        const {data:submissions}=await enagApi.get<SubmissionModel[]>(`/submissions/activity_id=${activity.id}`)
        const resourcesPromises=submissions.map(async(submission)=>{
            const {data:resource}=await enagApi.delete(`/submissions/resources/submission_id=${submission.id}`)
            return resource;
        }) 

        await Promise.all(resourcesPromises)

        //Eliminar entregas
        await enagApi.delete(`/submissions/activity_id=${activity.id}`);
        //Eliminar actividad
        const res = await enagApi.delete(`/activities/activity_id=${activity.id}`)
        
        return res
    } catch (error) {
        return error
    }
}