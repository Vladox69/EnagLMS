import { enagApi } from "@/apis"

export const deleteInscription=async(inscription:any)=>{
    try {
        const res=await enagApi.delete(`/inscriptions/inscription_id=${inscription.id}`)
        return res
    } catch (error) {
        return error
    }
}