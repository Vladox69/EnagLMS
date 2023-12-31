import {  AsistanceRegisterModel, StudentModel } from "@/models";

export interface AsistanceStudentI{
    id:number;
    student:StudentModel;
    asistance:AsistanceRegisterModel;
}