import { enagApi } from "@/apis";
import { ActivityModel, SectionModel, SubmissionModel } from "@/models";

export const deleteSection=async(section:SectionModel)=>{
    try {
        const res=await enagApi.delete(`/sections/section_id=${section.id}`)
        return res
    } catch (error) {
        return error
    }
}