import { enagApi } from "@/apis";
import { uploadFile } from "../uploadFiles";

export const newResource = async (resource: any) => {
  try {
    let res_img: any;
    let body: any;
    if (resource.type == "image") {
      res_img = await uploadFile(resource.photo_file);
      if (res_img.status == 200) {
        body = {
          title: resource.title,
          description: resource.description,
          url_resource: res_img.url,
          type: resource.type,
        };
        const res = await enagApi.post(`/resources`, body);
        return res;
      } else {
        return {
          message: "Could not upload file",
          status: 400,
        };
      }
    } else {
      body = {
        title: "",
        description: "",
        url_resource: resource.url_resource,
        type: resource.type,
      };
      const res = await enagApi.post(`/resources`, body);
      return res;
    }
  } catch (error) {
    return error;
  }
};
