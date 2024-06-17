import { enagApi } from "@/apis";
import { SectionModel } from "@/models";

export const deleteSection=async(section:SectionModel)=>{
    try {
        const res=await enagApi.delete(`/sections/section_id=${section.id}`)
        return res
    } catch (error) {
        return error
    }
}