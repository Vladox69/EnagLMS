import { enagApi } from "@/apis"
import { uploadFile } from "@/utils"

export const updateStudent = async (student: any) => {
    try {
        let resSC
        let study_certificate_url="";
        if (student.study_certificate_file != null) {
            resSC = await uploadFile(student.study_certificate_file)
            if(resSC.status==200){
                study_certificate_url=resSC.url
            }
        }

        const body = {
            id: student.id,
            study_certificate_url: (student.study_certificate_file!=null)? study_certificate_url:student.study_certificate_url,
            user_id: student.user_id,
        }
        const res=await enagApi.put(`/students/student_id=${student.id}`,body)
        return res
    } catch (error) {
        return error
    }
}