import { enagApi } from "@/apis"
import { uploadFile } from "@/utils"

export const updateStudent = async (student: any) => {
    try {
        let resID
        let resSC
        if (student.id_card_file != null) {
            resID = await uploadFile(student.id_card_file)
        }
        if (student.study_certificate_file != null) {
            resSC = await uploadFile(student.study_certificate_file)
        }

        const body = {
            id: student.id,
            ID_card_url: (student.id_card_file != null) ? resID!.url:student.ID_card_url,
            study_certificate_url: (student.study_certificate_file!=null)? resSC!.url:student.study_certificate_url,
            user_id: student.user_id,
            names: student.names,
            last_names: student.last_names
        }
        const res=await enagApi.put(`/students/student_id=${student.id}`,body)
        return res
    } catch (error) {
        return error
    }
}