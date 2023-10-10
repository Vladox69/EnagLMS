export interface UserModel{
    id:number;       
    username:string;
    password:string; 
    email:string;
    rol:UserRole;
    photo_url:string;
  }

  export type UserRole='ADMIN'|'USER'|'STUDENT'|'TEACHER'