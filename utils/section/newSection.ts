import { enagApi } from "@/apis"
import { SectionModel } from "@/models"

export const newSection=async (section:SectionModel)=>{
    try {
        const body={
            title:section.title,
            content:section.content,
            module_id:section.module_id
        }

        const res=await enagApi.post(`/sections`,body);
        return res;
    } catch (error) {
        return error;        
    }
}