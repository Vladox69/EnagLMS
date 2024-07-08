import { enagApi } from "@/apis";
import { uploadFile } from "../uploadFiles";

export const updateInternSubmission = async (submission: any) => {
  try {
    const res_file = await uploadFile(submission.file);

    if (res_file.status == 200) {
      const body = {
        url_resource: res_file.url,
      };
      const res = await enagApi.put(
        `/intern_submission/submission_id=${submission.id}`,
        body
      );
      return res;
    } else {
      return {
        message: "Could not upload file",
        status: 400,
      };
    }
  } catch (error) {
    return error;
  }
};
