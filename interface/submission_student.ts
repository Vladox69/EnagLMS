import { SubmissionModel, SubmissionResourceModel } from "@/models";

export interface SubmissionStudentI{
    id_submission:number;
    id_student:number;
    student:string;
    submission:SubmissionModel;
    resources:SubmissionResourceModel[];
}