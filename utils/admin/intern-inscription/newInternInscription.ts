import { enagApi } from "@/apis"

export const newInternInscription=async(inscription:any)=>{
    try {
        const body={
            student_id:inscription.student_id,
            course_id:inscription.course_id
        }
        const res = await enagApi.post(`/intern_inscription`,body)
        return res
    } catch (error) {
        return error
    }
}