import { SectionModel, StudentModel } from "@/models";

export interface GradeSection extends SectionModel{
    student:StudentModel,
    grade:number
}