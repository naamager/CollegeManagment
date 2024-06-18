export class Attendance {
    constructor(
        public attendance_id?: string,
        public student_id?: string,
        public class_id?:string,
        public class_date?: Date,
        public status?: Status,
        public marked_by?:string,
    )
    {}
}

export enum Status {
    Present = 1,
    Absent = 2,
}
