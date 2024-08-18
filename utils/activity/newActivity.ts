import { enagApi } from "@/apis";
import {
  ActivityModel,
  InscriptionModel,
  ModuleModel,
  SectionModel,
} from "@/models";

export const newActivity = async (activity: ActivityModel) => {
  try {
    const body = {
      title: activity.title,
      content: activity.content,
      time_due: activity.time_due,
      section_id: activity.section_id,
      ponderation: activity.ponderation,
    };

    const { data: section } = await enagApi.get<SectionModel>(
      `/sections/section_id=${activity.section_id}`
    );

    const { data: module } = await enagApi.get<ModuleModel>(
      `/modules/module_id=${section.module_id}`
    );
    const { data: students } = await enagApi.get<InscriptionModel[]>(
      `/inscriptions/course_id=${module.course_id}`
    );
    const res = await enagApi.post<ActivityModel>(`/activities`, body);
    const student_submission: any[] = [];
    
    students.map((student) => {
      const body = {
        grade: 0,
        comment: "",
        student_id: student.student_id,
        activity_id: res.data.id,
        state_gra: "Sin calificar",
        state_sub: "No entregado",
        date: "2000-08-18T00:00:00.000z",
      };
      student_submission.push(enagApi.post(`/submissions`, body));
    });
    await Promise.all(student_submission);
    return res;
  } catch (error) {
    return error;
  }
};
