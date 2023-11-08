import { enagApi } from "@/apis";
import { uploadFile } from "@/utils";

export const newSectionResource=async(resource:any)=>{
    try {

        const {file}=resource;
        const resImg = await uploadFile(file)
        
        const body={
            id:0,
            url_resource:resImg.url,
            section_id:resource.section_id,
            title:resImg.title
        }

        const res = await enagApi.post(`/sections/resources`,body)

        return res;
    } catch (error) {
        return error;
    }
}