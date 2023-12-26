export interface CourseModel{
    id:number;           
    topic:string;
    content:string;
    start_at:Date;
    end_at:Date;
    modality:string;
    objective:string;
    periods:number;
    qualification:string;
    requirements:string;
    type:string;
    visible:boolean;
    img_url:string;
  }