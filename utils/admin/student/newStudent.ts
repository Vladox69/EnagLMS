import { enagApi } from "@/apis"
import { uploadFile } from "@/utils"

export const newStudent = async (student: any) => {
    try {
        const resID = await uploadFile(student.id_card_file)
        const resSC = await uploadFile(student.study_certificate_file)

        const body={
            ID_card_url:resID.url,
            study_certificate_url:resSC.url,
            user_id:student.user_id, 
            names:student.names,
            last_names:student.last_names
        }

        const res = await enagApi.post(`/students`,body)
        return res

    } catch (error) {
        return error
    }
}