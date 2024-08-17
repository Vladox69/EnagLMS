import { enagApi } from "@/apis";
import { uploadFile } from "@/utils";

export const editCourse = async (course: any) => {
  try {
    let res_img = course.img_url;
    if (course.img_file != null) {
      const data = await uploadFile(course.img_file);
      if(data.url){
        res_img = data.url;
      }
    }
    const body = {
      id: course.id,
      topic: course.topic,
      content: course.content,
      start_at: course.start_at,
      end_at: course.end_at,
      modality: course.modality,
      objective: course.objective,
      periods: course.periods,
      qualification: course.qualification,
      requirements: course.requirements,
      type: course.type,
      visible: course.visible,
      img_url: res_img,
      is_start:course.is_start
    };
    const res = await enagApi.put(`/courses/course_id=${body.id}`, body);
    return res;
  } catch (error) {
    return error;
  }
};
