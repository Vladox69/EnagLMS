import { enagApi } from "@/apis";
import { ActivityInternModel } from "@/models";

export const resetInternCourse = async (course: any) => {
  try {
    const body = {
      id: course.id,
      title: course.title,
      content: course.content,
      start_at: course.start_at,
      end_at: course.end_at,
      img_url: course.img_url,
      teacher_id: course.teacher_id,
      is_start: course.is_start,
    };

    const { data: acts } = await enagApi.get<ActivityInternModel[]>(
      `/intern_activity/course_id=${course.id}`
    );
    let submissionGetPromises: any[] = [];
    let submissionsPromise: any[] = [];
    let submissions: any[] = [];
    acts.map((act) => {
      submissionGetPromises.push(
        enagApi.get(`/intern_submission/activity_id=${act.id}`)
      );
    });
    submissionsPromise = await Promise.all(submissionGetPromises);
    submissionsPromise.map((submission) => {
      submissions = [...submissions, submission.data];
    });
    submissions = submissions.flat();
    console.log(submissions);
    let submissionToDelete: any[] = [];
    let submissionDeleted;
    submissions.map((submission) => {
      submissionToDelete.push(
        enagApi.delete(`/intern_submission/submission_id=${submission.id}`)
      );
    });
    submissionDeleted = await Promise.all(submissionToDelete);
    console.log(submissionDeleted);

    let activityToDelete: any[] = [];
    let activityDeleted;
    acts.map((activity) => {
      activityToDelete.push(
        enagApi.delete(`/intern_activity/activity_id=${activity.id}`)
      );
    });
    activityDeleted = await Promise.all(activityToDelete);
    console.log(activityDeleted);
    const { data: inscriptions } = await enagApi.delete(
      `/intern_inscription/course_id=${course.id}`
    );
    console.log(inscriptions);
    const res = await enagApi.put(`/intern_course/course_id=${course.id}`,body)
    console.log(res);
    return res
  } catch (error) {
    console.log(error);
    return error;
  }
};
