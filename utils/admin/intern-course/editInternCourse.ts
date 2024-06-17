import { enagApi } from "@/apis";
import { uploadFile } from "@/utils";

export const editInternCourse = async (intern_course: any) => {
  try {
    let res_img = intern_course.img_url;
    if (intern_course.img_file != null) {
      const data = await uploadFile(intern_course.img_file);
      res_img=data.url;
    }
    const body = {
      id: intern_course.id,
      title: intern_course.title,
      content: intern_course.content,
      start_at: intern_course.start_at,
      end_at: intern_course.end_at,
      img_url: res_img,
      teacher_id: intern_course.teacher_id,
    };
    const res = await enagApi.put(`/intern_course/course_id=${body.id}`, body);
    return res
} catch (error) {
    return error
  }
};
