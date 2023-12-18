import { enagApi } from "@/apis"

export const deleteIntern=async(intern:any)=>{
    try {
        const res = await enagApi.delete(`/interns/intern_id=${intern.id}`)
        return res
    } catch (error) {
        return error
    }
}