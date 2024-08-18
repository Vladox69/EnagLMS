import { enagApi } from "@/apis";
import { uploadFile } from "../uploadFiles";

export const newInternActivity = async (submission: any) => {
  try {
    const res_file = await uploadFile(submission.file)
    const currentDate = new Date();
    currentDate.setUTCHours(0, 0, 0, 0);
    const date = currentDate.toISOString();
    const body = {
        url_resource:res_file.url,
        activity_id:submission.activity_id,
        student_id:submission.student_id,
        date
      };
    const res =await enagApi.post(`/intern_submission`,body)
    return res;
  } catch (error) {
    return error;
  }
};
