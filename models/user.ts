export interface UserModel{
    id:number;       
    username:string;
    password:string; 
    email:string;
    rol:UserRole;
    photo_url:string;
    names:string;
    last_names:string;
    ID_card_url: string;
}

export type UserRole='ADMIN'|'USER'|'STUDENT'|'TEACHER'