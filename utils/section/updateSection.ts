import { enagApi } from "@/apis";
import { SectionModel } from "@/models";

export const updateSection=async(section:SectionModel)=>{
    try {
        const body={
            title:section.title,
            content:section.content,
            id:section.id
        }
        const res=await enagApi.put(`/sections/section_id=${section.id}`,body)
        return res;
    } catch (error) {
        return error;
    }
}