import { ActivityModel, CourseModel, StudentModel, SubmissionModel } from "@/models";

export interface GradeCourseActivity extends CourseModel{
    student:StudentModel,
    activity:ActivityModel,
    submission:SubmissionModel
}