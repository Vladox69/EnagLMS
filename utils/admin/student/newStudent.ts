import { enagApi } from "@/apis"
import { uploadFile } from "@/utils"

export const newStudent = async (student: any) => {
    try {
        const resSC = await uploadFile(student.study_certificate_file)
        let study_certificate_url;
        if(resSC.status==200){
            study_certificate_url=resSC.url 
        }
        const body={
            study_certificate_url,
            user_id:student.user_id, 
        }

        const res = await enagApi.post(`/students`,body)
        return res

    } catch (error) {
        return error
    }
}