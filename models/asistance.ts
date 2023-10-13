export interface AsistanceModel{
    id:number;        
    status:AsistanceStatus;
    description:string;
    date:Date;    
    student_id:number;
    course_id:number;    
  }

export type AsistanceStatus='PRESENTE'|'ATRASO'|'FALTA'