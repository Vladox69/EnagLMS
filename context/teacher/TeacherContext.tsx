import { ModuleModel, TeacherModel } from "@/models";
import { createContext } from "react";

interface ContextProps{
    modules:ModuleModel[];
    teacher:TeacherModel|null
}

export const TeacherContext=createContext({} as ContextProps);