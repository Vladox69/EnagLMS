import { Course } from "@/interface";
import { createContext } from "vm";

interface ContextPros{
    courses:Course[]
    //methods
}


export const CoursesContext=createContext({} as ContextPros);