import { StudentModel, SubmissionModel, SubmissionResourceModel } from "@/models";

export interface SubmissionStudentI{
    id_submission:number;
    student:StudentModel|any;
    submission:SubmissionModel|any;
    resources:SubmissionResourceModel[]|any;
}