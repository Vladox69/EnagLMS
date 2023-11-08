import { enagApi } from "@/apis"


export const deleteActivityResource=async(resource:any)=>{
    try {
        //TODO: eliminar el documento del storage 
        const res = await enagApi.delete(`/activities/resources/resource_id=${resource.id}`)
        return res
    } catch (error) {
        return error
    }
}