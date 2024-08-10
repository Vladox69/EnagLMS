import { ActivityModel, SectionModel, StudentModel, SubmissionModel } from "@/models";

export interface GradeSectionActivity extends SectionModel{
    student:StudentModel,
    activity:ActivityModel,
    submission:SubmissionModel
}