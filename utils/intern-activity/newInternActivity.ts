import { enagApi } from "@/apis";
import { InternInscriptionModel } from "@/models";

export const newInternActivity = async (activity: any) => {
  try {
    const body = {
      title: activity.title,
      content: activity.content,
      course_id: activity.course_id,
    };
    const { data: intern_inscriptions } = await enagApi.get<
      InternInscriptionModel[]
    >(`/intern_inscription/course_id=${body.course_id}`);
    const inscription_ids = intern_inscriptions.map((inscription) => {
      return inscription.student_id;
    });
    const res = await enagApi.post(`/intern_activity`, body);
    await enagApi.post(`/intern_submission/activity_id=${res.data.id}`,{inscription_ids})
    return res;
  } catch (error) {
    return error;
  }
};
