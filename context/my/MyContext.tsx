import { Course } from "@/interface";
import { createContext } from "react";


interface ContextProps{
    courses:Course[];
    //Methods

}

export const MyContext=createContext({} as ContextProps);