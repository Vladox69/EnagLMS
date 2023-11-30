import { enagApi } from "@/apis"

export const deleteModule=async(module:any)=>{
    try {
        const res =await enagApi.delete(`/modules/module_id=${module.id}`)
        return res
    } catch (error) {
        return error
    }
}