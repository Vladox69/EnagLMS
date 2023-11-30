import { enagApi } from "@/apis"

export const newInscription=async(inscription:any)=>{
    try {
        const body={
            student_id:inscription.student_id,
            course_id:inscription.course_id
        }
        const res=await enagApi.post(`/inscriptions`,body)
        console.log(res);
        return res
    } catch (error) {
        return error
    }
}