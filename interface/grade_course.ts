import { StudentModel } from "@/models";
import { Course } from "./course";

export interface GradeCourse extends Course{
    student:StudentModel,
    grade:number
}