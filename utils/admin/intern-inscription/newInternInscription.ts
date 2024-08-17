import { enagApi } from "@/apis"

export const newInternInscription=async(inscription:any)=>{
    try {
        const currentDate=new Date()
        currentDate.setUTCHours(0,0,0,0)
        const date=currentDate.toISOString()
        const body={
            student_id:inscription.student_id,
            course_id:inscription.course_id,
            date
        }
        const res = await enagApi.post(`/intern_inscription`,body)
        return res
    } catch (error) {
        return error
    }
}