import { enagApi } from "@/apis";
import { AsistanceModel } from "@/models";

export const updateAsistance = async (asistance: AsistanceModel) => {
    try {

        const body = {
            date: asistance.date,
            description: asistance.description,
            id: asistance.id
        }

        const res = await enagApi.put<AsistanceModel>(`/asistances/asistance_id=${asistance.id}`, body)
        return res;
    } catch (error) {
        return error;
    }
}