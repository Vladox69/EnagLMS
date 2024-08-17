import { enagApi } from "@/apis";
import { uploadFile } from "@/utils/uploadFiles";

export const updateModule = async (module: any) => {
  try {
    let img_url = module.img_url;
    if (module.img_file != null) {
      const resImg = await uploadFile(module.img_file);
      if (resImg.status == 200) {
        img_url = resImg.url;
      }
    }

    const body = {
      id: module.id,
      title: module.title,
      content: module.content,
      course_id: module.course_id,
      teacher_id: module.teacher_id,
      img_url,
    };
    const res = await enagApi.put(`/modules/module_id=${module.id}`, body);
    return res;
  } catch (error) {
    return error;
  }
};
