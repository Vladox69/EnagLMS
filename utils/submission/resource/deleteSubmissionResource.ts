import { enagApi } from "@/apis";
import { SubmissionResourceModel } from "@/models";

export const deleteSubmissionResource=async(resource:SubmissionResourceModel)=>{
    try {
        // TODO: eliminar del storage
        const res = await enagApi.delete(`/submissions/resources/resource_id=${resource.id}`)
        return res
    } catch (error) {
        return error
    }
}