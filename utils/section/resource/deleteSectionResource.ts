import { enagApi } from "@/apis"

export const deleteSectionResource=async(resource:any)=>{
    try {
        
        //TODO: eliminar el documento del storage de cloudinary
        const res = await enagApi.delete(`/sections/resources/resource_id=${resource.id}`)
        return res
    } catch (error) {
        return error
    }
}