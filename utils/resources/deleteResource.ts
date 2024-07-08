import { enagApi } from "@/apis"

export const deleteResource=async(resource:any)=>{
    try {
        const res =await enagApi.delete(`/resources/resource_id=${resource.id}`)
        return res
    } catch (error) {
        return error
    }
}