import { enagApi } from "@/apis"

export const deleteStudent=async(student:any)=>{
    try {
        const res = await enagApi.delete(`/students/student_id=${student.id}`)
        return res
    } catch (error) {
        return error
    }
}