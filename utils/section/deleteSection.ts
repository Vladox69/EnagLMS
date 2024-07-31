import { enagApi } from "@/apis";
import { ActivityModel, SectionModel, SubmissionModel } from "@/models";

export const deleteSection = async (section: SectionModel) => {
  try {

    const {data:activities} = await enagApi.get<ActivityModel[]>(
      `/activities/section_id=${section.id}`
    );

    let submissionsPromisses: any[] = [];
    activities.map(async (activity) => {
      submissionsPromisses.push(
        enagApi.get<SubmissionModel[]>(
          `/submissions/activity_id=${activity.id}`
        )
      );
    });

    const allSubPromises = await Promise.all(submissionsPromisses)
    let submissions:any[]=[]
    allSubPromises.map((sub)=>{
        submissions=[...submissions,sub.data]
    });
    submissions=submissions.flat()

    //submission resources eliminados
    let submissionResourcesPromisses:any[]=[]
    submissions.map((submission)=>{
        submissionResourcesPromisses.push(enagApi.delete(`/submissions/resources/submission_id=${submission.id}`))
    })
    const srd= await Promise.all(submissionResourcesPromisses)
    console.log('Submission resources deleted');
    console.log(srd);
    
    //submission eliminados
    let subimissionsToDelete:any[]=[]
    submissions.map((submission)=>{
        subimissionsToDelete.push(enagApi.delete(`/submissions/submission_id=${submission.id}`))
    })
    const sd = await Promise.all(subimissionsToDelete)
    console.log('Submission deleted');
    console.log(sd);
    
    //activity resources eliminados
    const resourcesActsPromises: any = [];
    activities.map((activity) => {
      resourcesActsPromises.push(
        enagApi.delete(`/activities/resources/activity_id=${activity.id}`)
      );
    });
    const ard = await Promise.all(resourcesActsPromises);
    console.log('Activity resources deleted');
    console.log(ard);
    
    //activity eliminados
    let actToDelete:any[]=[]
    activities.map((activity)=>{
        actToDelete.push(enagApi.delete(`/activities/activity_id=${activity.id}`))
    })
    const ad=await Promise.all(actToDelete)
    console.log('Activities deleted');
    console.log(ad);

    // Borrado de recursos de la sección
    const data = await enagApi.delete(
      `/sections/resources/section_id=${section.id}`
    );
    console.log("Section resources deleted");
    console.log(data);

    const res = await enagApi.delete(`/sections/section_id=${section.id}`);
    return res
  } catch (error) {
    return error;
  }
};
