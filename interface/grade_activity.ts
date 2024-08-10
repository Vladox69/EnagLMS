import { ActivityModel, StudentModel, SubmissionModel } from "@/models";

export interface GradeActivity extends ActivityModel{
    student:StudentModel,
    submission:SubmissionModel
}