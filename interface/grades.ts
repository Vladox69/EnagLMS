import { ActivityModel, SectionModel, SubmissionModel } from "@/models";

interface ActivityI extends ActivityModel{
    submission:SubmissionModel
}

interface SectionsI extends SectionModel{
    activities:ActivityI[],
    total:number
}

export interface GradesI{
    id:number;
    sections:SectionsI[]
}