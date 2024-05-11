import { enagApi } from "@/apis";

export const deleteInternActivity = async (activity: any) => {
  try {
    await enagApi.delete(`/intern_submission/activity_id=${activity.id}`)
    const res = await enagApi.delete(
      `/intern_activity/activity_id=${activity.id}`
    );
    return res;
  } catch (error) {
    return error;
  }
};
