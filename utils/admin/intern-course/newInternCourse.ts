import { enagApi } from "@/apis";
import { uploadFile } from "@/utils/uploadFiles";

export const newInternCourse = async (intern_course: any) => {
  try {
    const res_img = await uploadFile(intern_course.img_file);    
    const body = {
      title: intern_course.title,
      content: intern_course.content,
      start_at: intern_course.start_at,
      end_at: intern_course.end_at,
      img_url: res_img.url,
      teacher_id: intern_course.teacher_id,
      is_start:intern_course.is_start
    }
    const res = await enagApi.post(`/intern_course`,body)
    return res
  } catch (error) {
    return error;
  }
};
