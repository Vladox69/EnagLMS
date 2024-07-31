import { enagApi } from "@/apis";
import { ModuleModel, SectionModel } from "@/models";
import { deleteSection } from "@/utils/section/deleteSection";

export const resetCourse = async (course: any) => {
  try {
    const body = {
      id: course.id,
      topic: course.topic,
      content: course.content,
      start_at: course.start_at,
      end_at: course.end_at,
      modality: course.modality,
      objective: course.objective,
      periods: course.periods,
      qualification: course.qualification,
      requirements: course.requirements,
      type: course.type,
      visible: course.visible,
      img_url: course.img_url,
      is_start: course.is_start,
    };
    const { data: modules } = await enagApi.get<ModuleModel[]>(
      `/modules/course_id=${course.id}`
    );
    console.log(modules);
    let resourcesModuleToDelete: any[] = [];
    let resourcesModuleDeleted: any;
    modules.map((module) => {
      resourcesModuleToDelete.push(
        enagApi.delete(`/modules/resources/module_id=${module.id}`)
      );
    });
    resourcesModuleDeleted=await Promise.all(resourcesModuleToDelete)
    console.log(resourcesModuleDeleted);
    
    let sectionsToDelete: any[] = [];
    let sectionsGetPromises: any[] = [];
    //Get sections
    modules.map((module) => {
      sectionsGetPromises.push(enagApi.get(`/sections/module_id=${module.id}`));
    });
    let sectionsPromise = await Promise.all(sectionsGetPromises);
    let sections: any[] = [];
    sectionsPromise.map((section) => {
      sections = [...sections, section.data];
    });
    sections = sections.flat();
    console.log(sections);
    sections.map((section) => {
      sectionsToDelete.push(deleteSection(section));
    });
    const sectionsDeleted = await Promise.all(sectionsToDelete);
    console.log("Deleted sections");
    console.log(sectionsDeleted);

    await enagApi.delete(`/inscriptions/course_id=${course.id}`);
    const res = await enagApi.put(`/courses/course_id=${body.id}`, body);
    return res;
  } catch (error) {
    return error;
  }
};
