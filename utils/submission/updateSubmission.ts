import { enagApi } from "@/apis";
import { SubmissionModel } from "@/models";

export const updateSubmission=async(submission:SubmissionModel)=>{
    try {

        const body={
            id: submission.id,
            grade: submission.grade,
            comment: submission.comment,
            student_id: submission.student_id,
            activity_id: submission.activity_id,
            state_gra:submission.state_gra,
            state_sub:submission.state_sub,
        }

        const res = await enagApi.put(`/submissions/submission_id=${submission.id}`,body)

        return res;
    } catch (error) {
        return error;
    }
}