import { enagApi } from "@/apis";
import { AsistanceStudentI } from "@/interface";

export const saveAsistanceRegisters = async (asistance_registers: AsistanceStudentI[]) => {
    try {
        const registersPromises = asistance_registers.map(async (regis) => {
            const body = {
                status: regis.asistance.status
            }
            const register = await enagApi.put(`/asistances/registers/register_id=${regis.id}`, body)
            return register
        })
        const registers = await Promise.all(registersPromises);
        return {
            status:200,
            registers
        }
    } catch (error) {
        return error;
    }
}