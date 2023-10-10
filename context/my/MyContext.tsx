import { CourseModel, InscriptionModel, StudentModel, UserModel } from "@/models";
import { createContext } from "react";


interface ContextProps{
    courses:CourseModel[];
    user:UserModel|StudentModel|null;
    inscriptions:InscriptionModel[];
    //Methods

}

export const MyContext=createContext({} as ContextProps);