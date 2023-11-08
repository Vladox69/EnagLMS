import { enagApi } from "@/apis";
import { uploadFile } from "@/utils";


export const newActivityResource = async (resource: any) => {
    try {
        
        const {file}=resource
        const resFile=await uploadFile(file);
        const body={
            id:0,
            url_resource:resFile.url,
            activity_id:resource.activity_id,
            title:resFile.title
        }

        const res = await enagApi.post(`/activities/resources`,body)
        return res
    } catch (error) {
        return error;
    }
}