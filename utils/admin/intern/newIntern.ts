import { enagApi } from "@/apis"
import { uploadFile } from "@/utils"

export const newIntern = async (intern: any) => {
    try {
        const resCV = await uploadFile(intern.cv_file)
        const body = {
            name: intern.name,
            phone: intern.phone,
            email: intern.email,
            cv_url: resCV.url,
        }
        const res = await enagApi.post(`/interns`,body)
        return res
    } catch (error) {
        return error
    }
}