import { ModuleModel, TeacherModel } from "@/models";
import { createContext } from "react";

interface ContextProps{
    modules:ModuleModel[];
    teacher:TeacherModel|null;
    active_module:ModuleModel|null;
    //methods
    setActiveModule: (md: ModuleModel) => void
}

export const TeacherContext=createContext({} as ContextProps);