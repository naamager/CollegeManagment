export class Student {
    student_id: Number | undefined;
    first_name?:string;
    last_name?:string;
    email?:string;
    phone?:string;
    status?:Status;
    created_at?:Date;
    updated_at?:Date;


  
}
export enum Status{
    potential=1,
    current=2   
  
      
}