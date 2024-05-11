import { enagApi } from "@/apis";

export const deleteInternCourse = async (inscription: any) => {
  try {
    const res = await enagApi.delete(
      `/intern_course/course_id=${inscription.id}`
    );
    return res;
  } catch (error) {
    return error;
  }
};
