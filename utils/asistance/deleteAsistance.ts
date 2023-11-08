import { enagApi } from "@/apis";
import { AsistanceModel } from "@/models";

export const deleteAsistance = async (asistance:AsistanceModel) => {
    try {
        await enagApi.delete(`/asistances/registers/asistance_id=${asistance.id}`)
        const res = await enagApi.delete(`/asistances/asistance_id=${asistance.id}`)
        return res
    } catch (error) {
        return error
    }
}