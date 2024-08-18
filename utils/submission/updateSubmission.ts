import { enagApi } from "@/apis";

export const updateSubmission=async(submission:any)=>{
    try {

        const body={
            id: submission.id,
            grade: submission.grade,
            comment: submission.comment,
            student_id: submission.student_id,
            activity_id: submission.activity_id,
            state_gra:submission.state_gra,
            state_sub:submission.state_sub,
            date:submission.date
        }

        const res = await enagApi.put(`/submissions/submission_id=${submission.id}`,body)

        return res;
    } catch (error) {
        return error;
    }
}