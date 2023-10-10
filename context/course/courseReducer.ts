import { Course } from "@/interface";
import { CourseState } from "./CourseProvider";

type CourseType =
    | { type: '[Course] Get-Data', payload: Course[] }


export const courseReducer = (state: CourseState, action: CourseType): CourseState => {
    switch (action.type) {
        case '[Course] Get-Data':

            return {
                ...state,
                courses: [...action.payload]
            };

        default:
            return state;
    }
}
