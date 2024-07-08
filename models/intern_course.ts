export interface InternCourseModel{
    id:number;
    title:string;
    content:string;
    start_at:Date;
    end_at:Date;
    img_url:string;
    teacher_id:number;
    is_start:boolean;
}