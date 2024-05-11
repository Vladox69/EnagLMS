import { enagApi } from "@/apis"

export const deleteInternInscription=async(inscription:any)=>{
    try {
        const res = await enagApi.delete(`/intern_inscription/inscription_id=${inscription.id}`)
        return res
    } catch (error) {
        return error
    }
}