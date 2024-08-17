import { enagApi } from "@/apis";

export const updateRegister = async (regiser: any) => {
  try {
    const body = {
      status: regiser.status,
    };
    const response = await enagApi.put(
      `/asistances/registers/register_id=${regiser.id}`,
      body
    );
    return response;
  } catch (error) {
    return error;
  }
};
