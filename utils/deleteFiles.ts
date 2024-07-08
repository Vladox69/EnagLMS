import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dhuqvvw4v",
  api_key: "132911996518186",
  api_secret: "uUqIbyLaHZywSLe7WKnC37FxSu4",
});

export const deleteFile = async (url: string) => {
  try {
    if (url != "") {
      const size_img = url.split("/") || [];
      const public_id = size_img[size_img?.length - 1].split(".")[0];
      const data = await cloudinary.api.delete_resources(
        [`enag/${public_id}`],
        {
          type: "upload",
          resource_type: "image",
        }
      );
      return {
        status: 200,
        message: "File delete",
        data,
      };
    }else{
      return {
        status: 204,
        message: "Not found",
      };
    }
  } catch (error) {
    return {
      error,
      message: "Couldnt delete file",
      status: 400,
    };
  }
};
