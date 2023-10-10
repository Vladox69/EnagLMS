import { Course } from "@/interface";
import { StudentModel, UserModel } from "@/models";
import { createContext } from "react";


interface ContextProps{
    courses:Course[];
    user:UserModel|StudentModel|null
    //Methods

}

export const MyContext=createContext({} as ContextProps);